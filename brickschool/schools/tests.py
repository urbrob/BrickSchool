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

    def test_pagination_school(self):
        schools = []
        for i in range(8):
            schools.append(SchoolFactory())

        query = '''
        {
          schools(first:2, skip:5) {
            id
            name
          }
        }
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schools'][0]['name'], schools[5].name)
        self.assertEqual(data['schools'][1]['name'], schools[6].name)
