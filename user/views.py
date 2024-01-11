from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse

def index(request):

     return render(request=request, template_name="index.html", context={})
def create(request):

     return render(request=request, template_name="create.html", context={})
