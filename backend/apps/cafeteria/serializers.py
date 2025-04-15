from rest_framework import serializers
from .models import Tienditas, Facultades, Menus, Usuarios

class TienditasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tienditas
        fields = '__all__'

class FacultadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facultades
        fields = '__all__'

class MenusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menus
        fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
        

