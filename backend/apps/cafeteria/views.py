from rest_framework import serializers
from rest_framework import viewsets
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters
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

    # Validar entrada
    if not username or not password:
        return Response({
            'success': False,
            'error': 'Faltan credenciales'
        }, status=status.HTTP_400_BAD_REQUEST)

    print(f"Intentando autenticar usuario: {username}")

    try:
        # Verificar si el usuario existe
        user_exists = Usuarios.objects.filter(nombre_usuario=username).exists()
        print(f"¿Usuario existe? {user_exists}")

        if user_exists:
            user = Usuarios.objects.get(nombre_usuario=username)
            print(f"Usuario encontrado: ID={user.id_usuarios}")

            # Verificar contraseña
            if check_password(password, user.contrasena):
                print("Autenticación exitosa")

                # Crear tokens JWT para el usuario
                refresh = RefreshToken.for_user(user)

                return Response({
                    'success': True,
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh)
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

    filter_backends = [
        DjangoFilterBackend,     
        filters.SearchFilter,    
        filters.OrderingFilter,  
    ]
    filterset_fields = ['id_tiendita']
    search_fields    = ['nombre']
    ordering_fields  = ['nombre']

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


class UsuarioActualView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        usuario = request.user
        return Response({
            'nombre_usuario': usuario.nombre_usuario,
            'id': usuario.id_usuarios,
        })

#Filtrar Menus
class MenusPorTiendita(generics.ListAPIView):
    serializer_class = MenusSerializer
    
    def get_queryset(self):
        tiendita_id = self.kwargs['tiendita_id']
        return Menus.objects.filter(tiendita_id=tiendita_id)

#Serializer para crear usuarios
class UserRegisterSerializer(ModelSerializer):
    class Meta:
        model = Usuarios
        fields = ['nombre_usuario', 'contrasena']  # No incluir el campo 'email' aquí
        extra_kwargs = {
            'contrasena': {'write_only': True},  # La contraseña no debe ser devuelta
        }

    def create(self, validated_data):
        contrasena = validated_data['contrasena']
        hashed_password = make_password(contrasena)  # Hasheamos la contraseña antes de guardarla
        validated_data['contrasena'] = hashed_password
        return Usuarios.objects.create(**validated_data)

class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]

def perform_create(self, serializer): 
    
    user = serializer.save()

def home(request): 
    return HttpResponse("<h1>Vista previa<h1>")


# Create your views here.
