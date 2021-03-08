from rest_framework import serializers
from .models import Pet
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ['id', 'pet_name', 'birthday', 'gender', 'owners_name', 'owners_number', 'medical_information']