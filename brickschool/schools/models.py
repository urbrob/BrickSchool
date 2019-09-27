from django.db import models

<<<<<<< HEAD
# Create your models here.
=======
class School(models.Model):
	name = models.TextField(max_length=250)
	city = models.TextField(max_length=250)
	type_school = models.CharField(max_length=10)
	patron = models.CharField(max_length=100)
	website = models.URLField(max_length=200)
	regon = models.CharField(max_length=14)
	location = models.TextField(max_length=250)


>>>>>>> e3dede7f903e268d06d5a239cca971785d80625c
class Properties(models.Model):
    type_properties = models.CharField(max_length=10)
    complexity = models.CharField(max_length=255)
    size_class = models.IntegerField()
    publicity = models.CharField(max_length=255)
    students_cathegory = models.CharField(max_length=100)
    specjalization = models.CharField(max_length=255)
    staff_amount = models.IntegerField()
    school = models.ForeignKey(School, on_delete=models.CASCADE)
<<<<<<< HEAD
=======
	
>>>>>>> e3dede7f903e268d06d5a239cca971785d80625c
