from django.db import models
from datetime import datetime


class School(models.Model):
	name = models.TextField(max_length=250)
	city = models.TextField(max_length=250)
	type_school = models.CharField(max_length=100, null=True)
	patron = models.CharField(max_length=100, null=True)
	website = models.URLField(max_length=200, null=True)
	regon = models.CharField(max_length=14, null=True)
	voivodship = models.CharField(max_length=50, null=True)
	rspo = models.CharField(max_length=50, null=True)
	location = models.CharField(max_length=250, null=True)
	county = models.CharField(max_length=250, null=True)
	community = models.CharField(max_length=250, null=True)
	email = models.EmailField(null=True)
	url = models.URLField(null=True)
	phone = models.CharField(max_length=18, null=True)
	nip = models.CharField(max_length=18, null=True)
	is_public = models.BooleanField(default=True)
	create_date = models.DateField(null=True)
	specialization = models.CharField(max_length=255, null=True)
	postal_code = models.CharField(max_length=6, null=True)


class SchoolClass(models.Model):
	specjalization = models.CharField(max_length=255, null=True)
	school = models.ForeignKey(School, on_delete=models.CASCADE)


class Statistics(models.Model):
	students = models.IntegerField(null=True)
	girls = models.IntegerField(null=True)
	boys = models.IntegerField(null=True)
	school = models.ForeignKey(School, on_delete=models.CASCADE)
	year = models.CharField(max_length=255)
	staff_amount = models.IntegerField(null=True)
	sport_ranking = models.IntegerField(null=True)
	human_ewd_rate = models.FloatField(null=True)
	human_ewd_exam_rate = models.FloatField(null=True)
	math_ewd_rate = models.FloatField(null=True)
	math_ewd_exam_rate = models.FloatField(null=True)


class FinalExam(models.Model):
	BASIC_LEVEL = 'PP'
	EXTENDED_LEVEL = 'PR'
	PASS_RATE = 'ZM'
	DATA_TYPE_CHOICES = (
		(BASIC_LEVEL, 'Poziom podstawowy'),
		(EXTENDED_LEVEL, 'Poziom rozszerzony'),
		(PASS_RATE, 'Zdawalność')
	)
	subject = models.CharField(max_length=100)
	avg_rate = models.IntegerField(null=True)
	data_type = models.CharField(choices=DATA_TYPE_CHOICES, max_length=2)
	number_of_people = models.IntegerField(null=True)
	statistic = models.ForeignKey(Statistics, on_delete=models.CASCADE)


class PerspectiveBadge(models.Model):
	statistic = models.ForeignKey(Statistics, on_delete=models.CASCADE, related_name='perspective_badge')
	local_rating = models.IntegerField()
	global_rating = models.IntegerField()
	wsk = models.FloatField()
