import graphene
import schools.schema
import quiz.schema


class Query(schools.schema.Query, quiz.schema.Query, graphene.ObjectType):
    test = graphene.String()

schema = graphene.Schema(query=Query)
