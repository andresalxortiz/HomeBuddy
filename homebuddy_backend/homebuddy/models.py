from django.db import models

# Make sure tp include 'homebuddy' in INSTALLED_APPS in settings.py
# Create your models here.
class Pet(models.Model):
    pet_name = models.CharField(max_length=30)
    description = models.TextField()

def __str__(self):
    return self.pet_name
