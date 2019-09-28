import graphene
from schools.models import School
from graphene_django.types import DjangoObjectType

class SchoolNode(DjangoObjectType):
    class Meta:
        model = School



class Query(graphene.ObjectType):
    schools = graphene.List(SchoolNode)


    def resolve_schools(self, info, **kwargs):
        return School.objects.all()
