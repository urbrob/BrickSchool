from quiz.models import Quiz, Question

from graphene_django.types import DjangoObjectType
import graphene

class QuizNode(DjangoObjectType):
    class Meta:
        model = Quiz


class QuestionNode(DjangoObjectType):
    class Meta:
        model = Question

class Query(graphene.ObjectType):
    quiz = graphene.List(QuizNode, name=graphene.String())

    def resolve_quiz(self, info, **kwargs):
        if kwargs['name']:
            return Quiz.objects.objects.filter(name=kwargs['name'])
        return []
