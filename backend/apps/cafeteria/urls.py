from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from .views import TienditasViewSet, FacultadesViewSet, MenusViewSet, UsuariosViewSet
from .views import MenusPorTiendita, UsuarioActualView
from . import views 

router = DefaultRouter()
router.register(r'Menus', MenusViewSet)
router.register(r'Tienditas', TienditasViewSet)
router.register(r'Facultades', FacultadesViewSet)
router.register(r'Usuarios', UsuariosViewSet)

urlpatterns = [
    path ('', views.home, name='home'), 
    path ('', include (router.urls)), 
    path('cafeteria/Menus/por_tiendita/<int:tiendita_id>/', MenusPorTiendita.as_view()),
    path('api/usuario-actual/', UsuarioActualView.as_view(), name='usuario-actual'),
    

]
