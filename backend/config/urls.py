"""
URL configuration for ingenieria_de_software_2025_1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from django.views.generic import RedirectView
from apps.cafeteria.views import TienditasViewSet, MenusViewSet, FacultadesViewSet, UsuariosViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from apps.cafeteria.views import UserRegisterView

router = routers.DefaultRouter()
router.register(r'Tienditas', TienditasViewSet)
router.register(r'Menus', MenusViewSet)
router.register(r'Facultades', FacultadesViewSet)
router.register(r'Usuarios', UsuariosViewSet)

urlpatterns = [
    path('cafeteria/', include('apps.cafeteria.urls')),
    path('admin/', admin.site.urls),  
    path('', RedirectView.as_view(url='/cafeteria/', permanent=False)),  
    
    #Endpoins de Autenticacion
    path('api/register', UserRegisterView.as_view(), name='register'),
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
