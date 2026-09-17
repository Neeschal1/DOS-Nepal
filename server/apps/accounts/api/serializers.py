from django.contrib.auth.models import User
from rest_framework import serializers
from apps.accounts.models.entities import UserProfile


# ── Credentials Setup (Step 1 of signup) ─────────────────────────────────────
class UserAccountCredentialsSetupSerializer(serializers.Serializer):
    firstname = serializers.CharField()
    lastname = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()


# ── OTP Verification (Step 2 of signup) ──────────────────────────────────────
class VerifyOTPSerializer(serializers.Serializer):
    otp = serializers.CharField(min_length=6, max_length=6)
    email = serializers.EmailField()


# ── Full Signup (Step 3 – includes phone + domain) ───────────────────────────
class UserAccountSignupSerializers(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=8)
    phone_number = serializers.CharField(max_length=20)
    domain = serializers.ChoiceField(choices=['German', 'Korean', 'Accounting', 'Computer'])


# ── Login ─────────────────────────────────────────────────────────────────────
class UserAccountLoginSerializers(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'})


# ── User Profile ──────────────────────────────────────────────────────────────
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'phone_number',
            'domain',
            'profile_picture',
            'bio',
            'enrolled_at',
            'updated_at',
        ]
        read_only_fields = ['enrolled_at', 'updated_at']


class UserWithProfileSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'profile']


# ── Profile Update ────────────────────────────────────────────────────────────
class UserProfileUpdateSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    phone_number = serializers.CharField(max_length=20, required=False)
    profile_picture = serializers.URLField(required=False, allow_blank=True)
    bio = serializers.CharField(required=False, allow_blank=True)