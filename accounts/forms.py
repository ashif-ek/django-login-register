from django import forms
from .models import User

class RegisterForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['email', 'password']


class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField()
