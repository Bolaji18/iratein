import random
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class message(models.Model):
    username = models.CharField(max_length=800, verbose_name="username")
    email = models.CharField(max_length=800, verbose_name="email")
    receiver = models.CharField(max_length=800, null=True)
    sender = models.CharField(max_length=800, null=True)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_unread=models.BooleanField(default=True)

class add(models.Model):
    username = models.CharField(max_length=800, verbose_name="username")
    addsender = models.CharField(max_length=800, null=True)
    addreceiver = models.CharField(max_length=800, null=True)
class texts(models.Model):
    content = models.TextField()
    sender = models.CharField(max_length=800, null=True)
    receiver = models.CharField(max_length=800, null=True)

class textsrecieved(models.Model):
    randoms = models.IntegerField(null=True)
    content = models.TextField(verbose_name="message")
    sender = models.CharField(max_length=800, null=True, verbose_name="username")
    receiver = models.CharField(max_length=800, null=True, verbose_name="username of the receiver" )
