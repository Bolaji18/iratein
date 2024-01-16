from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns =[
    path('message/', views.message, name='message'),

    path('message/<int:randoms>/<str:sender>', views.shows, name='shows'),
    path('message/<int:randoms>/<str:receiver>', views.shows2, name='shows2'),
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('accounts/login/message', views.message, name='messagess'),
    path('add', views.add, name='add'),
    path('add2', views.add2, name='add2'),
    path('logout', LogoutView.as_view(), name='logout'),

]
