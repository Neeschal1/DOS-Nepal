from django.contrib.auth.models import User
from rest_framework import serializers


# Credentials setup serializers
class UserAccountCredentialsSetupSerializer(serializers.Serializer):
    firstname = serializers.CharField()
    lastname = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    

# OTP verification for entered credentials 
class VerifyOTPSerializer(serializers.Serializer):
    otp = serializers.CharField()
    email = serializers.EmailField()


# Account signup serializers
class UserAccountSignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username", "email", "password", "is_active"]
        extra_kwargs = {
            "id": {"read_only": True},
            "first_name": {"required": True},
            "last_name": {"required": True},
            "username": {"required": True},
            "email": {"required": True},
            "password": {"required": True, "write_only": True},
            "is_active" : {"read_only": True}
        }
        

# Existing account login serializer
class UserAccountLoginSerializers(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'})
    