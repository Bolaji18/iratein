from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import add
from .models import textsrecieved
class NewUserForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ( "username","email", "password1")

    def save(self, commit=True):
        user = super(NewUserForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user
class ads(forms.ModelForm):

    class Meta:
        model =textsrecieved
        fields =['receiver', 'content']
class ads2(forms.ModelForm):

    class Meta:
        model =textsrecieved
        fields =[ 'content']
