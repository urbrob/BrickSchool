from django.test import RequestFactory, TestCase
from graphene.test import Client
from brickschool.schema import schema
from schools.factory_bot import SchoolFactory

def execute_test_client_api_query(query):
    client = Client(schema)
    return client.execute(query)

class APITest(TestCase):
    def test_graphene_working(self):
        query = '''
        {
          test
        }
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['test'], None)

class SchoolTest(TestCase):
    def test_all_school(self):
        school = SchoolFactory()
        school2 = SchoolFactory()
        query = '''
        {
          schools {
            id
            name
          }
        }
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schools'][0]['name'], school.name)
        self.assertEqual(data['schools'][1]['name'], school2.name)
        # self.assertEqual(data['city'], school.city)
        # self.assertEqual(data['type_school'], school.type_school)
        # self.assertEqual(data['patron'], school.patron)
        # self.assertEqual(data['website'], school.website)
        # self.assertEqual(data['regon'], school.regon)
        # self.assertEqual(data['voivodship'], school.voivodship)
        # self.assertEqual(data['street'], school.street)
        # self.assertEqual(data['house_number'], school.house_number)
        # self.assertEqual(data['country'], school.county)
        # self.assertEqual(data['community'], school.community)
        # self.assertEqual(data['postal_code'], school.postal_code)
