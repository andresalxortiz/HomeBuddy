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
from flask import Flask 
from flask_cors import CORS 
import pymongo
# Create your views here.

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer


connection_url = 'mongodb+srv://admin:admin123@cluster0.o9fmr.mongodb.net/homebuddy?retryWrites=true&w=majority'
app = Flask(__name__) 
client = pymongo.MongoClient(connection_url) 
  
# Database 
Database = client.get_database('homebuddy') 
# Table 

@app.route('/insert-one/<name>/<id>/', methods=['POST']) 
def insertOne(name, id): 
    queryObject = { 
        'Name': name, 
        'ID': id
    } 
    query = SampleTable.insert_one(queryObject) 
    return "Query inserted...!!!"