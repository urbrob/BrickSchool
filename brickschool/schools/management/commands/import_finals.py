from django.core.management.base import BaseCommand, CommandError
from schools.models import School, Statistics, FinalExam
import csv

class Command(BaseCommand):
    def handle(self, *args, **options):
        f = open('podstawy2.csv', 'r')
        reader = csv.reader(f)
        for _, name, street, city, subject, number_of_people, avg_rate, dec, empty in reader:
            try:
                school = School.objects.get_or_create(name=name, city=city, location=street)[0]
                stats = Statistics.objects.get_or_create(school_id=school.id, year="2018/2019")[0]
                final_exam = FinalExam.objects.get_or_create(
                    subject=subject[:-3],
                    is_extended=False,
                    number_of_people=int(number_of_people),
                    statistic=stats,
                    avg_rate=int(avg_rate) + float(dec) / 100,
                )
            except:
                pass
