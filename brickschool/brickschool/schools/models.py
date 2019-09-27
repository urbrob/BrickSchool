from django.db import models

class School(models.Model):
	name = models.TextField(max_length=250)
	city = models.TextField(max_length=250)
	type_school = models.CharField(max_length=10)
	patron = models.CharField(max_length=100)
	website = models.URLField(max_length=200)
	regon = models.CharField(max_length=14)
	location = models.TextField(max_length=250)


