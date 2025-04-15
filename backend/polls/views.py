from django.shortcuts import render
from django.http import HttpResponse 

def index(request):    
    return HttpResponse("Hola mundo desde polls index")

# Create your views here.
