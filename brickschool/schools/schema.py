import graphene
from .models import School, SchoolClass, Statistics, FinalExam, Badges
from graphene_django.types import DjangoObjectType


class SchoolNode(DjangoObjectType):
    class Meta:
        model = School


class SchoolClassNode(DjangoObjectType):
	class Meta:
		model = SchoolClass


class StatisticsNode(DjangoObjectType):
	class Meta:
		model = Statistics 
	

class FinalExamNode(DjangoObjectType):
	class Meta:
		model = FinalExam 


class BadgesNode(DjangoObjectType):
	class Meta:
		model = Badges


class Query(graphene.ObjectType):
    schools = graphene.List(SchoolNode)


    def resolve_schools(self, info, **kwargs):
        return School.objects.all()
