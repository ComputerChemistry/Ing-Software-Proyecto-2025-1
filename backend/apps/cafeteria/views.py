from rest_framework import serializers
from rest_framework import viewsets
from .models import Tienditas, Facultades, Menus, Usuarios
from .serializers import TienditasSerializer, FacultadesSerializer, MenusSerializer, UsuariosSerializer
from django.shortcuts import render
from django.http import HttpResponse

class MenusViewSet(viewsets.ModelViewSet): 
    queryset = Menus.objects.all()
    serializer_class = MenusSerializer

class TienditasViewSet(viewsets.ModelViewSet):
    queryset = Tienditas.objects.all()
    serializer_class = TienditasSerializer
      
class FacultadesViewSet(viewsets.ModelViewSet): 
    queryset = Facultades.objects.all()
    serializer_class = FacultadesSerializer

class UsuariosViewSet(viewsets.ModelViewSet): 
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer



def home(request): 
    return HttpResponse("<h1>Vista previa<h1>")


# Create your views here.
