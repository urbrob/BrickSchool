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
    quizzes = graphene.List(QuizNode, title=graphene.String())

    def resolve_quizzes(self, info, **kwargs):
        if kwargs['title']:
            return Quiz.objects.filter(title=kwargs['title'])
        return []
