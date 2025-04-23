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
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response

@api_view(['POST'])
def login_view(request):
    print("====== DEBUG LOGIN VIEW ======")
    print("Request data:", request.data)
    
    username = request.data.get('username')
    password = request.data.get('password')
    
    print(f"Intentando autenticar: {username} con contraseña: {password[:2]}...")
    
    try:
        # Verificar si el usuario existe
        user_exists = Usuarios.objects.filter(nombre_usuario=username).exists()
        print(f"¿Usuario existe? {user_exists}")
        
        if user_exists:
            user = Usuarios.objects.get(nombre_usuario=username)
            print(f"Usuario encontrado: ID={user.id_usuarios}, Email={user.email}")
            
            # Calcular hash para comparar
            import hashlib
            hashed_password = hashlib.sha256(password.encode()).hexdigest()
            print(f"Hash calculado: {hashed_password[:10]}...")
            print(f"Hash almacenado: {user.contrasena[:10]}...")
            print(f"¿Coinciden los hashes? {user.contrasena == hashed_password}")
            
            if user.contrasena == hashed_password:
                print("Autenticación exitosa")
                # Crear token JWT manualmente
                from rest_framework_simplejwt.tokens import RefreshToken
                
                # Crear un token para este usuario
                refresh = RefreshToken()
                refresh['user_id'] = user.id_usuarios
                refresh['username'] = user.nombre_usuario
                
                return Response({
                    'success': True,
                    'access_token': str(refresh.access_token)
                }, status=status.HTTP_200_OK)
            else:
                print("Contraseña incorrecta")
                return Response({
                    'success': False,
                    'error': 'Credenciales inválidas'
                }, status=status.HTTP_401_UNAUTHORIZED)
        
        else:
            print("Usuario no encontrado")
            return Response({
                'success': False,
                'error': 'Usuario no encontrado'
            }, status=status.HTTP_401_UNAUTHORIZED)
    
    except Exception as e:
        print(f"Error en login_view: {str(e)}")
        return Response({
            'success': False,
            'error': f'Error en el servidor: {str(e)}'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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

def perform_create(self, serializer): 
    
    user = serializer.save()

def home(request): 
    return HttpResponse("<h1>Vista previa<h1>")


# Create your views here.
