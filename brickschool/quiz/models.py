from django.db import models

# Create your models here.
class Quiz(models.Model):
    title = models.CharField(max_length=250)
    def __str__(self):
        return self.title


class Question(models.Model):
    CATEGORIES_CHOICES = (
        ('Inteligencja logiczno-matematyczna', 'Inteligencja logiczno-matematyczna'),
        ('Inteligencja lingwistyczna', 'Inteligencja lingwistyczna'),
        ('Inteligencja muzyczna', 'Inteligencja muzyczna'),
        ('Inteligencja interpersonalna', 'Inteligencja interpersonalna'),
        ('Inteligencja intrapersonalna', 'Inteligencja intrapersonalna'),
        ('Inteligencja fizyczno-kinestetyczna', 'Inteligencja fizyczno-kinestetyczna'),
        ('Inteligencja przyrodnicza', 'Inteligencja przyrodnicza'),
        ('Inteligencja wizualno-przestrzenna', 'Inteligencja wizualno-przestrzenna'),
    )
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    category = models.CharField(max_length=100, choices=CATEGORIES_CHOICES, default='0')
    def __str__(self):
        return self.title
    class Meta:
        ordering = ('-quiz',)
