from django.urls import include
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('courses-details', CoursesSerializersView, basename="courses")
router.register('advertisments-details', AdvertismentsSerializersView, basename="advertisment")
router.register('mentors-details', MentorsSerializersView, basename="mentors")
router.register('gallery-details', GallerySerializersView, basename="galleries")

urlpatterns = [
    path('', include(router.urls))
]