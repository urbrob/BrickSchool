import factory
from faker import Faker
from . import models
from factory import DjangoModelFactory, lazy_attribute

fake = Faker('pl_PL')


class SchoolFactory(DjangoModelFactory):
    class Meta:
        model = models.School

    name = lazy_attribute(lambda x: fake.user_name())
    city = lazy_attribute(lambda x: fake.city())
    type_school = lazy_attribute(lambda x: fake.color_name())
    patron = lazy_attribute(lambda x: fake.bs())
    website = lazy_attribute(lambda x: fake.uri())
    regon = lazy_attribute(lambda x: fake.region())
    voivodship = lazy_attribute(lambda x: fake.color_name())
    street = lazy_attribute(lambda x: fake.street_address())
    house_number = lazy_attribute(lambda x: fake.building_number())
    country = lazy_attribute(lambda x: fake.country())
    community = lazy_attribute(lambda x: fake.paragraph(nb_sentences=3, variable_nb_sentences=True, ext_word_list=None))
    postal_code = lazy_attribute(lambda x: fake.postcode())
