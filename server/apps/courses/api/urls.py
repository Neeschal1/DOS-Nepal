from django.urls import include, path
from .views import *
from .resource_views import ResourceView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('courses-details', CoursesSerializersView, basename='courses')
router.register('advertisments-details', AdvertismentsSerializersView, basename='advertisment')
router.register('mentors-details', MentorsSerializersView, basename='mentors')
router.register('gallery-details', GallerySerializersView, basename='galleries')

# Resources (domain-filtered, auth required)
router.register('resources', ResourceView, basename='resources')

urlpatterns = [
    path('', include(router.urls)),
]