from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..services.auth import UserAuth
from drf_yasg.utils import swagger_auto_schema


# ── Step 1: Credentials verification + OTP send ──────────────────────────────
class UserAccountCredentialsSetupSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    

    @swagger_auto_schema(request_body=UserAccountCredentialsSetupSerializer)
    def create(self, request):
        serializers = UserAccountCredentialsSetupSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            firstname = serializers.validated_data['firstname']
            lastname = serializers.validated_data['lastname']
            username = serializers.validated_data['username']
            email = serializers.validated_data['email']
            return UserAuth()._verifycredentials(firstname, lastname, username, email)
        
        
        s = UserAccountCredentialsSetupSerializer(data=request.data)
        if s.is_valid(raise_exception=True):
            return UserAuth()._verifycredentials(
                s.validated_data['firstname'],
                s.validated_data['lastname'],
                s.validated_data['username'],
                s.validated_data['email'],
            )


# ── Step 2: OTP verification ─────────────────────────────────────────────────
class VerifyOTPSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    

    @swagger_auto_schema(request_body=VerifyOTPSerializer)
    def create(self, request):
        serializers = VerifyOTPSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            mail = serializers.validated_data['email']
            otpcode = serializers.validated_data['otp']
            return UserAuth()._verifyotpcode(mail, otpcode)
        
        s = VerifyOTPSerializer(data=request.data)
        if s.is_valid(raise_exception=True):
            return UserAuth()._verifyotpcode(
                s.validated_data['email'],
                s.validated_data['otp'],
            )


# ── Step 3: Full signup (phone + domain + password) ──────────────────────────
class UserAccountSignupSerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    

    @swagger_auto_schema(request_body=UserAccountSignupSerializers)
    def create(self, request):
        signup_serializers = UserAccountSignupSerializers(data=request.data)
        if signup_serializers.is_valid(raise_exception=True):
            FirstName = signup_serializers.validated_data["first_name"]
            LastName = signup_serializers.validated_data["last_name"]
            Email = signup_serializers.validated_data["email"]
            Username = signup_serializers.validated_data["username"]
            Password = signup_serializers.validated_data["password"]
            return UserAuth()._signup(FirstName, LastName, Email, Username, Password)
        s = UserAccountSignupSerializers(data=request.data)
        if s.is_valid(raise_exception=True):
            return UserAuth()._signup(
                firstName=s.validated_data['first_name'],
                lastName=s.validated_data['last_name'],
                email=s.validated_data['email'],
                userName=s.validated_data['username'],
                passWord=s.validated_data['password'],
                phone_number=s.validated_data['phone_number'],
                domain=s.validated_data['domain'],
            )

   

# ── Login ─────────────────────────────────────────────────────────────────────
class UserAccountLoginSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    

    @swagger_auto_schema(request_body=UserAccountLoginSerializers)
    def create(self, request):
        serializers = UserAccountLoginSerializers(data=request.data)
        if serializers.is_valid(raise_exception=True):
            email = serializers.validated_data['email']
            password = serializers.validated_data['password']
            return UserAuth()._login(email, password)
        s = UserAccountLoginSerializers(data=request.data)
        if s.is_valid(raise_exception=True):
            return UserAuth()._login(
                email=s.validated_data['email'],
                password=s.validated_data['password'],
            )


# ── Profile: GET + PATCH ──────────────────────────────────────────────────────
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return UserAuth()._get_profile(request.user)

    @swagger_auto_schema(request_body=UserProfileUpdateSerializer)
    def patch(self, request):
        s = UserProfileUpdateSerializer(data=request.data, partial=True)
        if s.is_valid(raise_exception=True):
            return UserAuth()._update_profile(request.user, s.validated_data)


# ── Logout ────────────────────────────────────────────────────────────────────
class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        refresh_token = (
            request.COOKIES.get("refreshToken")
            or request.data.get("refresh_token", "")
        )
        return UserAuth()._logout(refresh_token)