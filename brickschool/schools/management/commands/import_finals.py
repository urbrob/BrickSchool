from django.core.management.base import BaseCommand, CommandError
from django.db.models import Q
from schools.models import School, Statistics, FinalExam
import csv


def load_finals_avg_file(filename, data_type):
    reader = csv.reader(open(filename, 'r'))
    for _, name, street, city, subject, number_of_people, avg_rate, dec, empty in reader:
        try:
            school = School.objects.get_or_create(name=name, city=city, location=street)[0]
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


def load_pass_final_rate():
    base_pass_import = csv.reader(open('zaliczenie.csv', 'r'))
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
    csv_import = csv.reader(open('dane_szkol.csv', 'r'))
    headers = next(csv_import)[0].replace('"', '').split(';')
    errors = 0
    for row in csv_import:
        data = dict(zip(headers, row[0].replace('"', '').split(';')))
        try:
            school = School.objects.get(regon=data['REGON'])
            school.update(
                rspo=data['\ufeffNumer RSPO'],
                type_school=data['Typ'],
                postal_code=data['Kod pocztowy'],
                phone=data['Telefon'],
                email=data['E-mail'],
                url=data['Strona www'],
                voivodship=data['Województwo'],
                county=data['Powiat'],
                community=data['Gmina'],
                nip=data['NIP'],
                is_public=data['Publiczność status'] != 'niepubliczna',
                create_date=data['Data założenia'],
            )
        except:
            pass


class Command(BaseCommand):
    def handle(self, *args, **options):
        #load_finals_avg_file('podstawy2.csv', "PR")
        #load_finals_avg_file('rozszerzenia2.csv', "PP")
        #load_pass_final_rate()
        #fill_school_data()
        perspective_high_school()
