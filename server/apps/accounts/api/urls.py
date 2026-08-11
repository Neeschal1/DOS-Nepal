from django.urls import include
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('account-signup', UserAccountSignupSerializersView, basename="user-accounts")
router.register('account-signup/credentials-setup', UserAccountCredentialsSetupSerializerView, basename="user-credentials")
router.register('account-signup/credentials-setup/otp-verification', VerifyOTPSerializerView, basename="user-otp-verification")

urlpatterns = [
    path('', include(router.urls))
]