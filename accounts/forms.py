from django import forms
from .models import User
from django.contrib.auth.hashers import make_password


class RegisterForm(forms.ModelForm):
    """
    Handles new user registration.
    - Uses a ModelForm because we are directly creating a User record.
    - We override `clean` or `save` to ensure passwords are hashed before storing.
    """

    password = forms.CharField(
        widget=forms.PasswordInput,  # hides password input
        help_text="Enter a strong password."
    )

    class Meta:
        model = User
        fields = ['email', 'password']

    def save(self, commit=True):
        """
        Override the default save() to hash the password.
        Without this, Django would store plain text — a critical security issue.
        """
        user = super().save(commit=False)
        user.password = make_password(self.cleaned_data['password'])  # hash password

        if commit:
            user.save()

        return user


class LoginForm(forms.Form):
    """
    Simple login form.
    - Does not interact with the database directly.
    - Only collects raw email/password input.
    """
    email = forms.EmailField(
        help_text="Enter your registered email."
    )

    password = forms.CharField(
        widget=forms.PasswordInput,  # hides password input
        help_text="Enter your password."
    )
