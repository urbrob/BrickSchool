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
    schools = graphene.List(
        SchoolNode,
        first=graphene.Int(),
        skip=graphene.Int(),
    )


    def resolve_schools(self, info, search=None, first=None, skip=None, **kwargs):
        schools = School.objects.all()

        if skip:
            schools = schools[skip:]
        if first:
            schools = schools[:first]

        return schools
