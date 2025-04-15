from django.urls import path 
from . import viws 

urlpatterns = [
    path ('', views.home, name='home'), 
]
