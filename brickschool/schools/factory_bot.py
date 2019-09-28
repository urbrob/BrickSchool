import factory
from . import models

class SchoolFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.School

    
