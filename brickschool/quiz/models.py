from django.db import models

# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=250)


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    category = models.CharField(max_length=100)
