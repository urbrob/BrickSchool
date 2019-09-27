from django.db import models

# Create your models here.
class Properties(models.Model):
    type_properties = models.CharField(max_length=10)
    complexity = models.CharField(max_length=255)
    size_class = models.IntegerField()
    publicity = models.CharField(max_length=255)
    students_cathegory = models.CharField(max_length=100)
    specjalization = models.CharField(max_length=255)
    staff_amount = models.IntegerField()
    school = models.ForeignKey(School, on_delete=models.CASCADE)
