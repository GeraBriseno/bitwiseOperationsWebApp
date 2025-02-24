from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("and_op", views.and_op, name="and_op"),
    path("or_op", views.or_op, name="or_op"),
    path("xor_op", views.xor_op, name="xor_op"),
    path("not_op", views.not_op, name="not_op"),
    path("left_shift_op", views.left_shift_op, name="left_shift_op"),
    path("right_shift_op", views.right_shift_op, name="right_shift_op"),
]