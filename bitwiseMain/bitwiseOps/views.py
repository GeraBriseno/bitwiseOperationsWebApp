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
    return HttpResponse("Flips all the bits. \n 1 becomes 0, and 0 becomes 1.")

def left_shift_op(request):
    return HttpResponse("Moves bits to the left by a certain number of positions. \n Each shift to the left multiplies the number by 2.")

def right_shift_op(request):
    return HttpResponse("Moves bits to the right by a certain number of positions. \n Each shift to the right divides the number by 2.")
