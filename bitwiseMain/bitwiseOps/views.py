from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    #return HttpResponse("You're at the bitwise HOME.")
    return render(request, "bitwiseOps/home.html")

def and_op(request):
    return render(request, "bitwiseOps/and_op.html")

def or_op(request):
    return render(request, "bitwiseOps/or_op.html")

def xor_op(request):
    return render(request, "bitwiseOps/xor_op.html")

def not_op(request):
    return render(request, "bitwiseOps/not_op.html")

def left_shift_op(request):
    return render(request, "bitwiseOps/leftshift_op.html")

def right_shift_op(request):
    return render(request, "bitwiseOps/rightshift_op.html")
