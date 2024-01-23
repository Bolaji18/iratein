from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .forms import NewUserForm
from .forms import ads
from .forms import ads2
from .models import textsrecieved
from .models import texts
from .models import add
import random
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
def index(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
              login(request, user)
              form = "you have successfully logged in"
              return redirect('message')
            else:
                 form = "Invalid Username or Password"
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
           form = "Your have registered successfully,pls return to homepage to login"
           return render(request=request, template_name="create.html", context={"form":form})

       else:
            form = "Your username is currently registered by another user or your password doesn't match, return to registration"
            return render(request=request, template_name="create.html", context={"form":form})




   form= NewUserForm()
   return render(request=request, template_name="create.html", context={"form":form})

def message(request):

     texts = textsrecieved.objects.all().values()
     return render(request=request, template_name="info.jsx", context={"texts":texts})

def add(request):
     if request.method == "POST":
         randoms = random.randint(6288, 7289200298298)
         sender = request.user
         receiver = request.POST.get('receiver')
         content = request.POST.get('content')
         my_worker= textsrecieved( content=content, sender=sender, receiver=receiver, randoms=randoms)
         my_worker.save()
         form = "Your message was sent successfully"
         return render(request=request, template_name="prompt.html", context={"form":form})

     form= ads()
     return render(request=request, template_name="add.html", context={"form":form})
def add2(request):
     if request.method == "POST":
         randoms = random.randint(6288, 7289200298298)
         sender = request.user
         receiver = request.POST.get('receiver')
         content = request.POST.get('content')
         my_worker= textsrecieved( content=content, sender=sender, receiver=receiver, randoms=randoms)
         my_worker.save()
         form = "Your message was sent successfully"
         return render(request=request, template_name="prompt.html", context={"form":form})

     form= ads()
     return render(request=request, template_name="show.html", context={"form":form})
def shows(request, randoms,sender):
    if request.method == "POST":
         randoms = random.randint(6288, 7289200298298)
         send = request.user
         receiver = sender
         content = request.POST.get('content')
         my_worker= textsrecieved( content=content, sender=send, receiver=receiver, randoms=randoms)
         my_worker.save()
         form = "Your message was sent successfully"
         return render(request=request, template_name="prompt.html", context={"form":form})

    form= ads2()
    text= textsrecieved.objects.get(randoms=randoms)
    return render(request=request, template_name="show.html", context={"x":text,"form":form})
def shows2(request, randoms,receiver):
    if request.method == "POST":
         randoms = random.randint(6288, 7289200298298)
         send = request.user
         receive = receiver
         content = request.POST.get('content')
         my_worker= textsrecieved( content=content, sender=send, receiver=receive, randoms=randoms)
         my_worker.save()
         form = "Your message was sent successfully"
         return render(request=request, template_name="prompt.html", context={"form":form})

    form= ads2()
    text= textsrecieved.objects.get(randoms=randoms)
    return render(request=request, template_name="show.html", context={"x":text,"form":form})
