import graphene

from graphene_django.types import DjangoObjectType

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
