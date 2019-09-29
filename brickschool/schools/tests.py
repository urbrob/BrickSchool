from django.test import RequestFactory, TestCase
from graphene.test import Client
from brickschool.schema import schema
from schools.factory_bot import *

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
            schools(first: 2){
                edges {
                    node {
                        id
                        name 
                        city
                    }
                }
            }
        }
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schools']['edges'][0]['node']['name'], school.name)
        self.assertEqual(data['schools']['edges'][1]['node']['name'], school2.name)

    def test_last_school(self):
        schools = []
        for i in range(8):
            schools.append(SchoolFactory())

        query = '''
        {
            schools(last: 3) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schools']['edges'][0]['node']['name'], schools[5].name)
        self.assertEqual(data['schools']['edges'][1]['node']['name'], schools[6].name)

    def test_resolve_school_detail(self):
        schools = SchoolFactory()
        query = '''
        {
            schoolDetail(pk: 1){
                name
            }
        }   
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schoolDetail']['name'], schools.name)

    def test_filters(self):
        school = []
        for i in range(10):
            if i != 0 and i != 2 and i != 7:
                school.append(SchoolFactory())
            else:
                school.append(SchoolFactoryWithSameCity())
        query = '''
        {
            schools(location: "noNeXIstinGlo"){
				edges {
                    node {
                        location
                    }
                }
            }
        }   
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schools']['edges'][0]['node']['location'], school[0].location)
        self.assertEqual(data['schools']['edges'][1]['node']['location'], school[2].location)
        self.assertEqual(data['schools']['edges'][2]['node']['location'], school[7].location)


    def test_schools_list(self):
        school = []
        for i in range(10):
            if i != 0 and i != 2 and i != 7:
                school.append(SchoolFactory())
            else:
                school.append(SchoolFactoryWithSimilarNames())
        query = '''
        {
            schoolsList(schoolName: "iM. pIkAc")
        }   
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['schoolsList'][0], school[0].name)
        self.assertEqual(data['schoolsList'][1], school[2].name)
        self.assertEqual(data['schoolsList'][2], school[7].name)