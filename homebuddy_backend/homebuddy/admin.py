from django.contrib import admin
from .models import Pet

# Register your models here. 

@admin.register(Pet)
class PetModel(admin.ModelAdmin):
    list_filter = ('pet_name', 'gender', 'owners_name')
    list_display = ('pet_name', 'birthday', 'gender', 'owners_name', 'owners_number', 'medical_information')
