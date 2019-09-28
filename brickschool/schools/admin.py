from django.contrib import admin
from .models import School, SchoolClass, Statistics, FinalExam, PerspectiveBadge

# Register your models here.

@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
	pass


@admin.register(SchoolClass)
class SchoolClassAdmin(admin.ModelAdmin):
	pass


@admin.register(Statistics)
class StatisticsAdmin(admin.ModelAdmin):
	pass


@admin.register(FinalExam)
class FinalExamAdmin(admin.ModelAdmin):

	pass


@admin.register(PerspectiveBadge)
class PerspectiveBadgeAdmin(admin.ModelAdmin):
	pass
