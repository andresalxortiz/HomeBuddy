from djongo import models
from django.db import models
from django.contrib.auth.models import User

# Make sure to include 'homebuddy' in INSTALLED_APPS in settings.py
# Create your models here

class Pet(models.Model):
    pet_name = models.CharField(max_length=30, blank=False, null=False)
    birthday = models.DateField(auto_now=True)
    gender = models.CharField(max_length=20, default='')
    owners_name = models.CharField(max_length=30, default='')
    owners_number = models.CharField(max_length=30, default='')
    medical_information = models.TextField()

    def __str__(self):
        return self.pet_name
