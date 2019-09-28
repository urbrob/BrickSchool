from django.contrib import admin
from .models import School, SchoolClass, Statistics, final_exam, Badges

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
class final_examAdmin(admin.ModelAdmin):
	pass


@admin.register(Badges)
class BadgesAdmin(admin.ModelAdmin):
	pass

