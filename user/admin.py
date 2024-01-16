from django.contrib import admin
from .models import message
from .models import add
from .models import texts
from .models import textsrecieved

admin.site.register(message)
admin.site.register(add)
admin.site.register(texts)
admin.site.register(textsrecieved)
