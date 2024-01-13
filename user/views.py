from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .forms import NewUserForm
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm
def index(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
              form = "welcome you have successfully logged in"
              return render(request=request, template_name="index.html", context={"form":form})
        else:
             form = "Invalid Username or Password"
             return render(request=request, template_name="index.html", context={"form":form})


    form = AuthenticationForm()
    return render(request=request, template_name="index.html", context={'form':form})


def create(request):
   if request.method == "POST":
       form = NewUserForm(request.POST)
       if form.is_valid():
           name= request.POST.get('username')
           email = request.POST.get('email')
           user = form.save()
           form = "Your have registered successfully"
           return render(request=request, template_name="create.html", context={"form":form})

       else:
            form = "Your username is currently registered by another user or your password doesn't match, return to registration"
            return render(request=request, template_name="create.html", context={"form":form})




   form= NewUserForm()
   return render(request=request, template_name="create.html", context={"form":form})
