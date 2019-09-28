from django.db import models


class School(models.Model):
	name = models.TextField(max_length=250)
	city = models.TextField(max_length=250)
	type_school = models.CharField(max_length=10)
	patron = models.CharField(max_length=100)
	website = models.URLField(max_length=200)
	regon = models.CharField(max_length=14)
	voivodship = models.CharField(max_length=50, null=True)
	street = models.CharField(max_length=250, null=True)
	house_number = models.CharField(max_length=50, null=True)
	county = models.CharField(max_length=250, null=True)
	community = models.CharField(max_length=250, null=True)
	postal_code = models.CharField(max_length=6, null=True)


class SchoolClass(models.Model):
	specjalization = models.CharField(max_length=255, null=True)
	school = models.ForeignKey(School, on_delete=models.CASCADE)


class Statistics(models.Model):
	students = models.IntegerField(null=True)
	girls = models.IntegerField(null=True)
	boys = models.IntegerField(null=True)
	school = models.ForeignKey(School, on_delete=models.CASCADE)
	year = models.DateField(null=True)
	staff_amount = models.IntegerField()
	sport_ranking = models.IntegerField(default=0)


class FinalExam(models.Model):
	subject = models.CharField(max_length=100)
	avg_rate = models.IntegerField(null=True)
	pass_rate = models.IntegerField(null=True)
	is_extended = models.BooleanField(default=False)
	number_of_people = models.IntegerField(null=True)
	statistic = models.ForeignKey(Statistics, on_delete=models.CASCADE)


class Badges(models.Model):
	badge_type = models.CharField(max_length=100)
	statistic = models.ForeignKey(Statistics, on_delete=models.CASCADE)
