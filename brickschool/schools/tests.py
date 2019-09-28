from django.test import RequestFactory, TestCase
from graphene.test import Client
from brickschool.schema import schema

def execute_test_client_api_query(query):
    client = Client(schema)
    return client.execute(query)

class APITest(TestCase):
    def test_accounts_queries(self):
        query = '''
        {
          test
        }
        '''
        executed = execute_test_client_api_query(query)
        data = executed.get('data')
        self.assertEqual(data['test'], None)
