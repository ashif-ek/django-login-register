from django.shortcuts import render, redirect
from .forms import RegisterForm, LoginForm
from .models import User

def register_view(request):
    form = RegisterForm()
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    return render(request, 'register.html', {'form': form})


def login_view(request):
    form = LoginForm()
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User.objects.filter(email=email, password=password).first()
            if user:
                request.session['user_id'] = user.id
                return redirect('home')
    return render(request, 'login.html', {'form': form})


def home_view(request):
    user_id = request.session.get('user_id')
    if not user_id:
        return redirect('login')

    return render(request, 'home.html')


def logout_view(request):
    request.session.flush()  # clears all session data
    return redirect('login')
