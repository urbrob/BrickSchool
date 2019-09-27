from django.db import models


# Create your models here.

class School(models.Model):
	name = models.TextField(max_length=250)
	city = models.TextField(max_length=250)
	type_school = models.CharField(max_length=10)
	patron = models.CharField(max_length=100)
	website = models.URLField(max_length=200)
	regon = models.CharField(max_length=14)
	location = models.TextField(max_length=250)


class Properties(models.Model):
    type_properties = models.CharField(max_length=10)
    complexity = models.CharField(max_length=255)
    size_class = models.IntegerField()
    publicity = models.CharField(max_length=255)
    students_cathegory = models.CharField(max_length=100)
    specjalization = models.CharField(max_length=255)
    staff_amount = models.IntegerField()
    school = models.ForeignKey(School, on_delete=models.CASCADE)

class school_class(models.Model):
    specjalization = models.CharField(max_length=255)
    school = models.ForeignKey(School, on_delete=models.CASCADE)

class final_exam(models.Model):
    subject = models.CharField(max_length=100)
    extended = models.BooleanField()
    avg_rate = models.IntegerField()
    pass_rate = models.IntegerField()
    statistic = models.IntegerField()
    number_of_ppl = models.IntegerField()
    statistic = models.ForeignKey(Statistics, on_delete=models.CASCADE)
