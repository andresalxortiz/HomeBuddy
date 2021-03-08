from .models import Pet
from .serializers import PetSerializer, UserSerializer
from django.shortcuts import render, redirect, HttpResponse, get_object_or_404
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets

# Create your views here.

def MainPage(request):
    # return render(request, 'home.html')
    return HttpResponse("This is the Main Page")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
'''
def SignUp(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'accounts\templatessl\signup.html', {'form': form})
'''

'''
class PetViewSet(viewsets.ViewSet):
    def list(self, request):
        petnames = Pet.objects.all()
        serializer = PetSerializer(petnames, many=True)
        return Response(serializer.data)

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
