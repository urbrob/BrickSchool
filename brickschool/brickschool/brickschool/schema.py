import graphene
import schools.schema


class Query(schools.schema.Query, graphene.ObjectType):
    test = graphene.String()

schema = graphene.Schema(query=Query)
