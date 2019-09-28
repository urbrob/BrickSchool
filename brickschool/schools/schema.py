import graphene
from .models import School, SchoolClass, Statistics, FinalExam
from graphene_django.types import DjangoObjectType
import django_filters
from graphene import relay


class SchoolFilter(django_filters.FilterSet):
    #name = django_filters.CharFilter(method=filter_cs)
    class Meta:
        model = School
        fields = ['name',
                'city',
                'type_school',
                'patron',
                'website',
                'regon',
                'voivodship',
                'county',
                'community',
                'postal_code',
                'location',
                ]


class SchoolNode(DjangoObjectType):
    class Meta:
        model = School
        filterset_class = SchoolFilter
        interfaces = (relay.Node, )


class SchoolClassFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_type=['icontains'])
    fields = ['specialization',
            'school',
            ]


class SchoolClassNode(DjangoObjectType):
    class Meta:
        model = SchoolClass
        filterset_class = SchoolClassFilter


class StatisticsClassFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_type=['icontains'])
    fields = ['students',
            'girls',
            'boys',
            'school',
            'year',
            'staff_amount',
            'sport_ranking',
            ]


class StatisticsNode(DjangoObjectType):
    class Meta:
        model = Statistics
        filterset_class = StatisticsClassFilter


class FinalExamFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_type=['icontains'])
    fields = ['subject',
            'avg_rate',
            'pass_rate',
            'is_extended',
            'number_of_people',
            'statistic',
            ]


class FinalExamNode(DjangoObjectType):
    class Meta:
        model = FinalExam
        filterset_class = [FinalExamFilter]

class Query(graphene.ObjectType):
    schools = graphene.List(
        SchoolNode,
        first=graphene.Int(),
        skip=graphene.Int(),
    )
    schools_list = graphene.List(graphene.String, school_name=graphene.Argument(graphene.String, required=False))


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
