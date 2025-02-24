from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    #return HttpResponse("You're at the bitwise HOME.")
    return render(request, "bitwiseOps/home.html")

def and_op(request):
    return HttpResponse("Compares each bit of two numbers. \n The result is 1 only if both bits are 1. Otherwise, it's 0.")

def or_op(request):
    return HttpResponse("Compares each bit of two numbers. \n The result is 1 if at least one of the bits is 1.")

def xor_op(request):
    return HttpResponse("Compares each bit of two numbers. \n The result is 1 only if the bits are different.")

def not_op(request):
    return HttpResponse("Flips all the bits. \n 1 becomes 0, and 0 becomes 1.")

def left_shift_op(request):
    return HttpResponse("Moves bits to the left by a certain number of positions. \n Each shift to the left multiplies the number by 2.")

def right_shift_op(request):
    return HttpResponse("Moves bits to the right by a certain number of positions. \n Each shift to the right divides the number by 2.")
