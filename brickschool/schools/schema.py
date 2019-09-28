import graphene
from .models import School, SchoolClass, Statistics, FinalExam
from graphene_django.types import DjangoObjectType
import django_filters
from graphene import relay


class SchoolNode(DjangoObjectType):
    class Meta:
        model = School
        interfaces = (relay.Node, )


class SchoolClassNode(DjangoObjectType):
    class Meta:
        model = SchoolClass


class StatisticsNode(DjangoObjectType):
    class Meta:
        model = Statistics


class FinalExamNode(DjangoObjectType):
    class Meta:
        model = FinalExam


class Query(graphene.ObjectType):
    schools = graphene.List(
        SchoolNode,
        first=graphene.Int(),
        skip=graphene.Int(),
    )
    schools_list = graphene.List(graphene.String, school_name=graphene.Argument(graphene.String, required=False))
    school_detail = graphene.Field(SchoolNode, id=graphene.Argument(graphene.Int, required=True))


    def resolve_schools(self, info, first=None, skip=None, **kwargs):
        schools = School.objects.all()
        if skip:
            schools = schools[skip:]
        if first:
            schools = schools[:first]
        return schools

    def resolve_schools_list(self, info, school_name=None):
        if school_name:
            return School.objects.filter(name__startswith=school_name)[:10].values_list('name', flat=True)
        return []

    def resolve_school_detail(self, info, id):
        return School.objects.get(id=id)
