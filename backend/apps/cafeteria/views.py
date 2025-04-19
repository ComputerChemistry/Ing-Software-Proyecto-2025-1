from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import generics, filters
from .models import Tienditas, Facultades, Menus, Usuarios
from .serializers import TienditasSerializer, FacultadesSerializer, MenusSerializer, UsuariosSerializer
from django.shortcuts import render
from rest_framework.serializers import ModelSerializer
from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from django.contrib.auth import authenticate 
from rest_framework.decorators import api_view 
from rest_framework.response import Response

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        return Response({'success': True, 'username': user.username}, status=status.HTTP_200_OK)
    else:
        return Response({'success': False, 'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)         

class MenusViewSet(viewsets.ModelViewSet): 
    queryset = Menus.objects.all()
    serializer_class = MenusSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nombre']
    ordering_fields = ['nombre']

class TienditasViewSet(viewsets.ModelViewSet):
    queryset = Tienditas.objects.all()
    serializer_class = TienditasSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nombre']
    ordering_fields = ['nombre']

      
class FacultadesViewSet(viewsets.ModelViewSet): 
    queryset = Facultades.objects.all()
    serializer_class = FacultadesSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nombre']
    ordering_fields = ['nombre']


class UsuariosViewSet(viewsets.ModelViewSet): 
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nombre']
    ordering_fields = ['nombre']


#Filtrar Menus
class MenusPorTiendita(generics.ListAPIView):
    serializer_class = MenusSerializer
    
    def get_queryset(self):
        tiendita_id = self.kwargs['tiendita_id']
        return Menus.objects.filter(tiendita_id=tiendita_id)

#Serializer para crear usuarios
class UserRegisterSerializer(ModelSerializer):
    class Meta: 
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {    
            'password' : {'write_only': True}
        }
        
    def create(self, validate_data): 
        user = User.objects.create_user(**validated_data)
        return user


class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]
        
def home(request): 
    return HttpResponse("<h1>Vista previa<h1>")


# Create your views here.
