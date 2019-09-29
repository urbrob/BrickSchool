import factory
from faker import Faker
from . import models
from factory import DjangoModelFactory, lazy_attribute
import random

fake = Faker('pl_PL')


class SchoolFactory(DjangoModelFactory):
    class Meta:
        model = models.School
    name = lazy_attribute(lambda x: fake.company())
    city = lazy_attribute(lambda x: fake.city())
    type_school = lazy_attribute(lambda x: fake.color_name())
    patron = lazy_attribute(lambda x: fake.name())
    website = lazy_attribute(lambda x: fake.url())
    regon = lazy_attribute(lambda x: fake.msisdn())
    voivodship = lazy_attribute(lambda x: fake.city_suffix())
    rspo = lazy_attribute(lambda x: fake.msisdn())
    location = lazy_attribute(lambda x: fake.street_address())
    county = lazy_attribute(lambda x: fake.pystr(min_chars=None, max_chars=10))
    community = lazy_attribute(lambda x: fake.pystr(min_chars=None, max_chars=10))
    email = lazy_attribute(lambda x: fake.ascii_email())
    url = lazy_attribute(lambda x: fake.url())
    phone = lazy_attribute(lambda x: fake.msisdn())
    nip =  lazy_attribute(lambda x: fake.msisdn())
    is_public =  lazy_attribute(lambda x: fake.pybool())
    create_date = lazy_attribute(lambda x: fake.date(pattern="%Y-%m-%d", end_datetime=None))
    specialization = lazy_attribute(lambda x: fake.job())
    postal_code = lazy_attribute(lambda x: fake.postcode())

class SchoolFactoryWithSameCity(DjangoModelFactory):
    class Meta:
        model = models.School
    name = lazy_attribute(lambda x: fake.company())
    city = "NonExistingLocation"
    type_school = lazy_attribute(lambda x: fake.color_name())
    patron = lazy_attribute(lambda x: fake.name())
    website = lazy_attribute(lambda x: fake.url())
    regon = lazy_attribute(lambda x: fake.msisdn())
    voivodship = lazy_attribute(lambda x: fake.city_suffix())
    rspo = lazy_attribute(lambda x: fake.msisdn())
    location = "Street " + str(lazy_attribute(lambda x: fake.street_address())) + ", " + city
    county = "Fake County"
    community = "Fake Community"
    email = lazy_attribute(lambda x: fake.ascii_email())
    url = lazy_attribute(lambda x: fake.url())
    phone = lazy_attribute(lambda x: fake.msisdn())
    nip =  lazy_attribute(lambda x: fake.msisdn())
    is_public =  lazy_attribute(lambda x: fake.pybool())
    create_date = lazy_attribute(lambda x: fake.date(pattern="%Y-%m-%d", end_datetime=None))
    specialization = lazy_attribute(lambda x: fake.job())
    postal_code = lazy_attribute(lambda x: fake.postcode())    


def getRandomSpecialization():
    specs = ['Technikum', 'Liceum', 'Szkoła artystyczna', 'Szkoła zawodowa', 'Zespół szkół', 'Szkoła Podstawowa']
    return specs[random.randrange(len(specs))]


class SchoolFactoryWithSimilarNames(DjangoModelFactory):
    class Meta:
        model = models.School
    specialization = getRandomSpecialization()
    patron = "Pikachu"
    city = lazy_attribute(lambda x: fake.city())
    name = specialization + " nr " + str(random.randrange(50)) + " im. " + patron
    type_school = lazy_attribute(lambda x: fake.color_name())
    website = lazy_attribute(lambda x: fake.url())
    regon = lazy_attribute(lambda x: fake.msisdn())
    voivodship = lazy_attribute(lambda x: fake.city_suffix())
    rspo = lazy_attribute(lambda x: fake.msisdn())
    location = lazy_attribute(lambda x: fake.street_address())
    county = lazy_attribute(lambda x: fake.pystr(min_chars=None, max_chars=10))
    community = lazy_attribute(lambda x: fake.pystr(min_chars=None, max_chars=10))
    email = lazy_attribute(lambda x: fake.ascii_email())
    url = lazy_attribute(lambda x: fake.url())
    phone = lazy_attribute(lambda x: fake.msisdn())
    nip =  lazy_attribute(lambda x: fake.msisdn())
    is_public =  lazy_attribute(lambda x: fake.pybool())
    create_date = lazy_attribute(lambda x: fake.date(pattern="%Y-%m-%d", end_datetime=None))
    postal_code = lazy_attribute(lambda x: fake.postcode())    