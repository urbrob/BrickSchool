import graphene
from .models import School, SchoolClass, Statistics, FinalExam, PerspectiveBadge
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
import django_filters
from graphene import relay


class SchoolFilter(django_filters.FilterSet):

    name = django_filters.CharFilter(lookup_expr='startswitch')
    location = django_filters.CharFilter(lookup_expr='icontains')
    perspective_badge = django_filters.ChoiceFilter(method='perspective_badge_filter', choices=['gold', 'silver', 'bronze'])
    wsk = django_filters.NumberFilter(field_name='statistics__perspective_badge', lookup_expr='gt')

    class Meta:
        model = School
        fields = ['is_public', 'type_school']

    def perspective_badge_filter(self, queryset, name, value):
        if value == 'gold':
            return queryset.filter(statistics__perspective_badge__global_rating__lt=100)
        elif value == 'silver':
            return queryset.filter(statistics__perspective_badge__global_rating__lt=200)
        elif value == 'bronze':
            return queryset.filter(statistics__perspective_badge__global_rating__lt=500)

class PerspectiveBadge(DjangoObjectType):
    badge = graphene.String()
    class Meta:
        model = PerspectiveBadge

    def resolve_badge(self, info):
        if self.position_global < 100:
            return "gold"
        if self.position_global < 200:
            return "silver"
        if self.position_global < 500:
            return "bronze"
        return "shit"


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
    schools = DjangoFilterConnectionField(
        SchoolNode,
        filterset_class=SchoolFilter
    )
    schools_list = graphene.List(graphene.String, school_name=graphene.Argument(graphene.String, required=False))
    school_detail = graphene.Field(SchoolNode, id=graphene.Argument(graphene.Int, required=True))

    def resolve_schools_list(self, info, school_name=None):
        if school_name:
            #return School.objects.filter(name__startswith=school_name)[:10].values_list('name', flat=True)
            return School.objects.filter(name__contains=school_name)[:10].values_list('name', flat=True)
        return []

    def resolve_school_detail(self, info, id):
        return School.objects.get(id=id)
