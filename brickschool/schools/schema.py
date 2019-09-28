import graphene
from .models import School, SchoolClass, Statistics, FinalExam, Badges
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
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
                'street',
                'house_number',
                'county',
                'community',
                'postal_code',
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


class BadgesNodeFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_type=['icontains'])
    fields = ['badge_type',
            'statistic',
            ]


class BadgesNode(DjangoObjectType):
    class Meta:
        model = Badges
        filterset_class = [BadgesNodeFilter]


class Query(graphene.ObjectType):
    schools = graphene.List(
        SchoolNode,
        first=graphene.Int(),
        skip=graphene.Int(),
    )
    a = DjangoFilterConnectionField(SchoolNode)


    def resolve_schools(self, info, search=None, first=None, skip=None, **kwargs):
        schools = School.objects.all()

        if skip:
            schools = schools[skip:]
        if first:
            schools = schools[:first]

        return schools
