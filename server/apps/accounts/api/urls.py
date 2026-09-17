from django.urls import include
from django.urls import include, path
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('account-signup', UserAccountSignupSerializersView, basename="user-accounts")
router.register('account-signup/credentials-setup', UserAccountCredentialsSetupSerializerView, basename="user-credentials")
router.register('account-signup/credentials-setup/otp-verification', VerifyOTPSerializerView, basename="user-otp-verification")
# Signup 3-step flow
router.register('account-signup', UserAccountSignupSerializersView, basename='user-accounts')
router.register(
    'account-signup/credentials-setup',
    UserAccountCredentialsSetupSerializerView,
    basename='user-credentials'
)
router.register(
    'account-signup/credentials-setup/otp-verification',
    VerifyOTPSerializerView,
    basename='user-otp-verification'
)

# Login
router.register('account-login', UserAccountLoginSerializerView, basename='user-login')

urlpatterns = [
    path('', include(router.urls))
    path('', include(router.urls)),
    # Profile (requires authentication)
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    # Logout (requires authentication)
    path('account-logout/', UserLogoutView.as_view(), name='user-logout'),
]