import factory
from faker import Faker
from . import models

fake = Faker('pl_PL')

class SchoolFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.School

    name = fake.user_name()
    city = fake.city()
    type_school = fake.color_name()
    patron = fake.bs()
    website = fake.uri()
    regon = fake.region()
    voivodship = fake.color_name()
    street = fake.street_address()
    house_number = fake.building_number()
    county = fake.country()
    community = fake.paragraph(nb_sentences=3, variable_nb_sentences=True, ext_word_list=None)
    postal_code = fake.postcode()
