from django.shortcuts import render, HttpResponse
from .models import Pet
from .serializers import PetSerializer
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets
from django.shortcuts import get_object_or_404

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
import pymongo
from pymongo import MongoClient


class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

    print("HEY QUERRYYYYL ")
    print(queryset)

    dBName = "homebuddy"
    collectionName = "homebuddy"

    client = MongoClient("COPY THE DB STING")

    DB = client[dBName]
    collection = DB[collectionName]

    datas = list(Pet.objects.values())

    data = collection.insert_many(datas)
