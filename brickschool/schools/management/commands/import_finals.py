from django.core.management.base import BaseCommand, CommandError
from django.db.models import Q
from schools.models import School, Statistics, FinalExam, PerspectiveBadge
from difflib import SequenceMatcher
from collections import defaultdict
import json
import csv

def similiar(str1, str2):
    return SequenceMatcher(None, str1, str2).ratio()

def load_finals_avg_file(filename, data_type):
    reader = csv.reader(open(filename, 'r'))
    for _, name, street, city, subject, number_of_people, avg_rate, dec, regon in reader:
        try:
            school = School.objects.get_or_create(name=name, city=city, location=street)[0]
            if regon:
                school.regon = regon
                school.save()
            stats = Statistics.objects.get_or_create(school_id=school.id, year="2018/2019")[0]
            final_exam = FinalExam.objects.get_or_create(
                subject=subject[:-3],
                data_type=data_type,
                number_of_people=int(number_of_people),
                statistic=stats,
                avg_rate=int(avg_rate) + float(dec) / 100,
            )
        except:
            pass

def load_finals_avg_file_roz(filename, data_type):
    reader = csv.reader(open(filename, 'r'))
    for row in reader:
        try:
            school = School.objects.get_or_create(name=row[1], city=row[3], location=row[2])[0]
            if row[8]:
                school.regon = row[8]
                school.save()
            stats = Statistics.objects.get_or_create(school_id=school.id, year="2018/2019")[0]
            final_exam = FinalExam.objects.get_or_create(
                subject=row[4][:-3],
                data_type=data_type,
                number_of_people=int(row[5]),
                statistic=stats,
                avg_rate=int(row[6]) + float(row[7]) / 100,

            )
        except:
            pass


def load_pass_final_rate():
    base_pass_import = csv.reader(open('data_imports/zaliczenie.csv', 'r'))
    for _, name, street, city, subject, num_of_ppl, pass_rate, powiat_rate, woj_rate in base_pass_import:
        try:
            school = School.objects.get_or_create(name=name, city=city, location=street)[0]
            stats = Statistics.objects.get_or_create(school_id=school.id, year="2018/2019")[0]
            final_exam = FinalExam.objects.get_or_create(
                subject=subject,
                data_type="ZM",
                number_of_people=int(number_of_people),
                statistic=stats,
                avg_rate=float(pass_rate),
            )
        except:
            pass


def fill_school_data():
    csv_import = csv.reader(open('data_imports/dane_szkol.csv', 'r'))
    headers = next(csv_import)[0].split(';')
    for row in csv_import:
        data = dict(zip(headers, row[0].replace('"', '').split(';')))
        max_rat = 0
        school = None
        for school_q in School.objects.filter(regon__isnull=True):
            if similiar(school_q.location, data.get('Ulica', '')) > max_rat:
                max_rat = similiar(school_q.location, data.get('Ulica', ''))
                school = school_q
        if school and (max_rat > 0.75 or data.get('Number budynku', '') in school_q.location):
            School.objects.filter(id=school.id).update(
                rspo=data.get('\ufeffNumer RSPO'),
                type_school=data.get('Typ'),
                postal_code=data.get('Kod pocztowy'),
                phone=data.get('Telefon'),
                email=data.get('E-mail'),
                url=data.get('Strona www'),
                voivodship=data.get('Województwo'),
                county=data.get('Powiat'),
                community=data.get('Gmina'),
                nip=data.get('NIP'),
                is_public=data.get('Publiczność status') != 'niepubliczna',
                create_date=data.get('Data założenia'),
                regon=data.get('REGON')
            )
        max_rat = 0

def perspective_high_school(bag_of_words):
    base_pass_import = csv.reader(open('data_imports/high_school_perspective.csv', 'r'))
    for _, _, _, _, position_local, position_global, name, _, _, wsk, _, _ in base_pass_import:
        school = School.objects.all()
        for word in name.split(' '):
            if word in bag_of_words:
                try:
                    school = school.filter(name__icontains=word)
                    if school.count() == 1:
                        school = school.get()
                        break
                except:
                    pass
        if isinstance(school, School):
            stats = Statistics.objects.get(school_id=school.id, year="2018/2019")
            PerspectiveBadge.objects.get_or_create(
                statistic=stats,
                local_rating=int(position_local) if position_local[-1] != '+' else 500,
            	global_rating=int(position_global) if position_global[-1] != '+' else 500,
            	wsk=float(wsk)
            )

def float_my(string):
    if string:
        return float(string)
    return None


def parse_growth_data(bag_of_words, json_file, main_head):
    with open(json_file) as json_f:
        data = json.load(json_f)[main_head]
        subject = data['skrot']
        for school_data in data['szkoly']:

            school = School.objects.filter(location__icontains=school_data['adres'].split(',')[0])
            for word in school_data['nazwa'].split(' '):
                if word in bag_of_words:
                    try:
                        school = school.filter(name__icontains=word)
                        if school.count() == 1:
                            school = school.get()
                            break
                    except:
                        pass
            if isinstance(school, School):
                try:
                    if subject == 'humanistyczny' or subject == 'język polski':
                        data = school_data['okresy']['2016-2018']
                        stats = Statistics.objects.filter(school_id=school.id).update(
                            human_ewd_rate=float_my(data['ewd']['pkt']),
                            human_ewd_exam_rate=float_my(data['egz']['pkt']),
                        )
                    else:
                        import pdb; pdb.set_trace()
                        stats = Statistics.objects.filter(school_id=school.id).update(
                            math_ewd_rate=float_my(data['ewd']['pkt']),
                            math_ewd_exam_rate=float_my(data['egz']['pkt']),
                        )
                except KeyError:
                    pass


class Command(BaseCommand):
    def handle(self, *args, **options):
        load_finals_avg_file('data_imports/podstawy2.csv', "PP")
        load_finals_avg_file_roz('data_imports/rozszerzenie.csv', "PR")
        load_pass_final_rate()
        fill_school_data()
        bag_of_words = defaultdict(lambda: 0)
        for school in School.objects.all():
            for word in school.name.split(' '):
                bag_of_words[word] += 1
        bag_of_words = {key: value  for key, value in bag_of_words.items() if value == 1}
        perspective_high_school(bag_of_words.keys())
        parse_growth_data(bag_of_words, 'data_imports/human-high.json', 'mlp_2016')
        parse_growth_data(bag_of_words, 'data_imports/human-tech.json', 'mth_2016')
        parse_growth_data(bag_of_words, 'data_imports/mat-high.json', 'mlmp_2016')
        parse_growth_data(bag_of_words, 'data_imports/mat-tech.json', 'mtmp_2016')
