from django.contrib import admin
from .models import Pet

# Register your models here.
@admin.register(Pet)
class PetModel(admin.ModelAdmin):
    list_filter = ('pet_name', 'description')
    list_display = ('pet_name', 'description')
