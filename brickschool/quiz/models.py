from django.db import models

# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=250)


class Question(models.Model):
    CATEGORIES_CHOICES = (
        ('0', 'Inteligencja logiczno-matematyczna'),
        ('1', 'Inteligencja lingwistyczna'),
        ('2', 'Inteligencja muzyczna'),
        ('3', 'Inteligencja interpersonalna'),
        ('4', 'Inteligencja intrapersonalna'),
        ('5', 'Inteligencja fizyczno-kinestetyczna'),
        ('6', 'Inteligencja przyrodnicza'),
        ('7', 'Inteligencja wizualno-przestrzenna'),
    )
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    category = models.CharField(max_length=100, choices=CATEGORIES_CHOICES, default='0')
