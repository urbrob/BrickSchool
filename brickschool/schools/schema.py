import graphene
from .models import School, SchoolClass, Statistics, FinalExam, PerspectiveBadge
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
import django_filters
from graphene import relay


class SchoolFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    location = django_filters.CharFilter(lookup_expr='icontains')
    perspective_badge = django_filters.CharFilter(method='perspective_badge_filter')
    wsk = django_filters.NumberFilter(method='wsk_filter')
    type_school = django_filters.CharFilter(method='type_school_filter')

    class Meta:
        model = School
        fields = ['is_public', 'type_school']

    def wsk_filter(self, queryset, name, value):
        return queryset.filter(statistics__perspective_badge__wsk__gt=value)

    def type_school_filter(self, queryset, name, value):
        return queryset.filter(name__contains=value)

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
        if self.global_rating:
            if self.global_rating < 100:
                return "gold"
            if self.global_rating < 200:
                return "silver"
            if self.global_rating < 500:
                return "bronze"
        return "shit"


class SchoolNode(DjangoObjectType):
    pk = graphene.Field(graphene.Int)

    class Meta:
        model = School
        interfaces = (relay.Node, )

    def resolve_id(self, info):
        return self.id


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
    school_detail = graphene.Field(SchoolNode, pk=graphene.Argument(graphene.Int, required=True))

    def resolve_schools_list(self, info, school_name=None):
        if school_name:
            #return School.objects.filter(name__startswith=school_name)[:10].values_list('name', flat=True)
            return School.objects.filter(name__contains=school_name)[:10].values_list('name', flat=True)
        return []

    def resolve_school_detail(self, info, pk):
        return School.objects.get(id=pk)
