from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from ..services.auth import UserAuth
from drf_yasg.utils import swagger_auto_schema


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
        
        
class VerifyOTPSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(request_body=VerifyOTPSerializer)
    def create(self, request):
        serializers = VerifyOTPSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            mail = serializers.validated_data['email']
            otpcode = serializers.validated_data['otp']
            return UserAuth()._verifyotpcode(mail, otpcode)
        


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

   
class UserAccountLoginSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(request_body=UserAccountLoginSerializers)
    def create(self, request):
        serializers = UserAccountLoginSerializers(data=request.data)
        if serializers.is_valid(raise_exception=True):
            email = serializers.validated_data['email']
            password = serializers.validated_data['password']
            return UserAuth()._login(email, password)