from django.urls import include, path
from .views import MockTestView, StudentAttemptsView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('mock-tests', MockTestView, basename='mock-tests')
router.register('my-attempts', StudentAttemptsView, basename='my-attempts')

urlpatterns = [
    path('', include(router.urls)),
]

