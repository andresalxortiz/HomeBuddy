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

    def create(self, request):
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            seralizer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Pet.objects.all()
        petname = get_object_or_404(queryset, pk=pk)
        serializer = PetSerializer(petname)
        return Response(serializer.data)

    def update(self, request, pk=None):
        petname = Pet.objects.get(pk=pk)
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            seralizer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        petname = Pet.objects.get(pk=pk)
        petname.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''


'''
class PetList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class PetDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)
'''