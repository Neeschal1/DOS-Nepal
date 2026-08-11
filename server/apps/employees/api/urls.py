from django.urls import include
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('employee-details', EmployeesSerializersViews, basename="employees")
router.register('success-stories-details', StorySerializersViews, basename="successstories")

urlpatterns = [
    path('', include(router.urls))
]