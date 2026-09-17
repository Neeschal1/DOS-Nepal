from rest_framework.response import Response
from rest_framework import status
from .sms_service import SendOTP
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.core.cache import cache
from apps.accounts.models.entities import UserProfile


class UserAuth:
    # initial credentials verification

    # ── Step 1: Verify credentials before sending OTP ─────────────────────────
    def _verifycredentials(self, firstname: str, lastname: str, username: str, email: str) -> Response:
        try:
            userName = User.objects.filter(username=username).exists()
            userEmail = User.objects.filter(email=email).exists()
            
            if userName == True or userEmail == True:
                return Response({"message": "The entered username or email already exists! Try again with a different credentials :)"}, status=status.HTTP_400_BAD_REQUEST)
            
            if User.objects.filter(username=username).exists():
                return Response(
                    {"message": "Username already taken. Try a different one!"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            if User.objects.filter(email=email).exists():
                return Response(
                    {"message": "An account with this email already exists!"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            fullname = f"{firstname} {lastname}"
            otp_services = SendOTP._send_sms(email, fullname)
            
            if otp_services['success'] == True:
                return Response({"message": "OTP sent successfully to your entered email!"}, status=status.HTTP_200_OK)
            
            return Response({"message": "Failed to send OTP to entered email, Try again later!"}, status=status.HTTP_400_BAD_REQUEST)
            

            if otp_services['success']:
                return Response(
                    {"message": "OTP sent successfully to your email!"},
                    status=status.HTTP_200_OK
                )

            return Response(
                {"message": "Failed to send OTP. Please try again later!"},
                status=status.HTTP_400_BAD_REQUEST
            )

        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": str(e)}, status=status.HTTP_417_EXPECTATION_FAILED)
        
    
    # otp code verification
            return Response(
                {"message": "Something went wrong!", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    # ── Step 2: Verify OTP code ────────────────────────────────────────────────
    def _verifyotpcode(self, mail: str, entered_otp: str) -> Response:
        try:
            userEmail = User.objects.filter(email=mail).exists()
            
            if userEmail == True:
                return Response({"message": "An account already registered with the entered email!"}, status=status.HTTP_400_BAD_REQUEST)
            
            if User.objects.filter(email=mail).exists():
                return Response(
                    {"message": "An account is already registered with this email!"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            otpcode = cache.get(f"userinfo_{mail}")
            if not otpcode:
                return Response({"message": "OTP not found, or might have been expired. Please request a new one!"}, status=status.HTTP_404_NOT_FOUND)
            
                return Response(
                    {"message": "OTP expired or not found. Please request a new one!"},
                    status=status.HTTP_404_NOT_FOUND
                )

            if otpcode["otp"] != entered_otp:
                return Response({"message": "The entered OTP is incorrect. Please check the code correctly and try again!"}, status=status.HTTP_400_BAD_REQUEST)
            
            credentials = {
                "email": mail,
                "status": True
            }
            cache.set(f"{mail}'s_activation_info", credentials, timeout=600)
            
            return Response({"message": "Your account is successfully verified :)"}, status=status.HTTP_202_ACCEPTED)
            
                return Response(
                    {"message": "Incorrect OTP. Please check and try again!"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Mark email as OTP-verified in cache (10 min window to complete signup)
            cache.set(f"{mail}_verified", {"email": mail, "verified": True}, timeout=600)

            return Response(
                {"message": "Email verified successfully! Please complete your profile."},
                status=status.HTTP_202_ACCEPTED
            )

        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": str(e)}, status=status.HTTP_417_EXPECTATION_FAILED)
    
    
    # new account registration
    def _signup(self, firstName: str, LastName: str, email: str, userName: str, passWord: str) -> Response:
            return Response(
                {"message": "Something went wrong!", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    # ── Step 3: Create account with phone + domain ─────────────────────────────
    def _signup(
        self,
        firstName: str,
        lastName: str,
        email: str,
        userName: str,
        passWord: str,
        phone_number: str,
        domain: str,
    ) -> Response:
        try:
            not_a_unique_email = User.objects.filter(email=email).exists()
            not_a_unique_username = User.objects.filter(username = userName).exists()
            
            if not_a_unique_email == True:
                return Response({"Message": "An account with this email already exists."}, status=status.HTTP_409_CONFLICT)
            
            if not_a_unique_username == True:
                return Response({"Message":"An account is already signed up with the entered phone number!"}, status=status.HTTP_409_CONFLICT)
            
            # Uniqueness checks
            if User.objects.filter(email=email).exists():
                return Response(
                    {"message": "An account with this email already exists."},
                    status=status.HTTP_409_CONFLICT
                )
            if User.objects.filter(username=userName).exists():
                return Response(
                    {"message": "Username is already taken."},
                    status=status.HTTP_409_CONFLICT
                )
            if UserProfile.objects.filter(phone_number=phone_number).exists():
                return Response(
                    {"message": "An account with this phone number already exists."},
                    status=status.HTTP_409_CONFLICT
                )

            # Create Django User
            user = User.objects.create(
                first_name=firstName,
                last_name=LastName,
                last_name=lastName,
                username=userName,
                email=email,
                password=make_password(passWord),
            )

            # Create UserProfile
            UserProfile.objects.create(
                user=user,
                phone_number=phone_number,
                domain=domain,
            )

            # Issue JWT tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)

            response = Response({"message": "User signed up successfully :)", "userinfo": {"usersName: ": f"{firstName} {LastName}", "username: ": userName, "email: ": email},},status=status.HTTP_201_CREATED)

            response.set_cookie(
                key="accessToken",
                value=access_token,
                httponly=True,
                secure=False,
                samesite="Lax",
                max_age=300,
            response = Response(
                {
                    "message": "Account created successfully!",
                    "data": {
                        "id": user.id,
                        "name": f"{firstName} {lastName}",
                        "email": email,
                        "username": userName,
                        "domain": domain,
                        "access_token": access_token,
                        "refresh_token": refresh_token,
                    },
                },
                status=status.HTTP_201_CREATED,
            )

            response.set_cookie(
                key="refreshToken",
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite="Lax",
                max_age=30 * 24 * 60 * 60,
            )
            self._set_auth_cookies(response, access_token, refresh_token)
            return response
        

        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": str(e)}, status=status.HTTP_417_EXPECTATION_FAILED)
        
    
    # login an account
            return Response(
                {"message": "Something went wrong!", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    # ── Login ──────────────────────────────────────────────────────────────────
    def _login(self, email: str, password: str) -> Response:
        try:
            try:
                user = User.objects.get(email = email)
                user = User.objects.select_related('profile').get(email=email)
            except User.DoesNotExist:
                 return Response({"Message":"User didn't found with the email provided. So sorry for your inconvenience :("}, status=status.HTTP_404_NOT_FOUND)
            
            match_password = check_password(password, user.password)
            if not match_password:
                return Response({"Message":"Invalid Credentials. So Sorry :("}, status=status.HTTP_401_UNAUTHORIZED)
            
                return Response(
                    {"message": "No account found with this email address."},
                    status=status.HTTP_404_NOT_FOUND
                )

            if not check_password(password, user.password):
                return Response(
                    {"message": "Incorrect password. Please try again."},
                    status=status.HTTP_401_UNAUTHORIZED
                )

            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
            
            response = Response({"message":"Login successful :)"}, status=status.HTTP_202_ACCEPTED)
            
            response.set_cookie(
                key="accessToken",
                value=access_token,
                httponly=True,
                secure=False,
                samesite="Lax",
                max_age=300,

            # Build user info payload for the frontend
            profile = getattr(user, 'profile', None)
            user_data = {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "username": user.username,
                "email": user.email,
                "access_token": access_token,
                "refresh_token": refresh_token,
                "profile": {
                    "phone_number": profile.phone_number if profile else "",
                    "domain": profile.domain if profile else "",
                    "profile_picture": profile.profile_picture if profile else "",
                    "bio": profile.bio if profile else "",
                    "enrolled_at": str(profile.enrolled_at) if profile else "",
                } if profile else None,
            }

            response = Response(
                {"message": "Login successful!", "data": user_data},
                status=status.HTTP_200_OK
            )
            
            response.set_cookie(
                key="refreshToken",
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite="Lax",
                max_age=30 * 24 * 60 * 60,

            self._set_auth_cookies(response, access_token, refresh_token)
            return response

        except Exception as e:
            return Response(
                {"message": "Something went wrong!", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
            if match_password:
                return response
            

    # ── Get Profile ────────────────────────────────────────────────────────────
    def _get_profile(self, user) -> Response:
        try:
            profile = getattr(user, 'profile', None)
            data = {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "username": user.username,
                "email": user.email,
                "profile": {
                    "phone_number": profile.phone_number if profile else "",
                    "domain": profile.domain if profile else "",
                    "profile_picture": profile.profile_picture if profile else "",
                    "bio": profile.bio if profile else "",
                    "enrolled_at": str(profile.enrolled_at) if profile else "",
                    "updated_at": str(profile.updated_at) if profile else "",
                } if profile else None,
            }
            return Response({"success": True, "data": data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": e}, status=status.HTTP_417_EXPECTATION_FAILED)
    
            return Response(
                {"message": "Something went wrong!", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    # ── Update Profile ─────────────────────────────────────────────────────────
    def _update_profile(self, user, validated_data: dict) -> Response:
        try:
            # Update User fields
            if 'first_name' in validated_data:
                user.first_name = validated_data['first_name']
            if 'last_name' in validated_data:
                user.last_name = validated_data['last_name']
            user.save()

            # Update or create UserProfile
            profile, _ = UserProfile.objects.get_or_create(user=user)
            if 'phone_number' in validated_data:
                profile.phone_number = validated_data['phone_number']
            if 'profile_picture' in validated_data:
                profile.profile_picture = validated_data['profile_picture']
            if 'bio' in validated_data:
                profile.bio = validated_data['bio']
            profile.save()

            return Response(
                {"message": "Profile updated successfully!"},
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return Response(
                {"message": "Something went wrong!", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    # ── Logout ─────────────────────────────────────────────────────────────────
    def _logout(self, refresh_token: str) -> Response:
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            response = Response(
                {"message": "Logged out successfully!"},
                status=status.HTTP_200_OK
            )
            response.delete_cookie("accessToken")
            response.delete_cookie("refreshToken")
            return response

        except Exception as e:
            return Response(
                {"message": "Logout failed!", "detail": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

    # ── Helpers ────────────────────────────────────────────────────────────────
    def _set_auth_cookies(self, response, access_token: str, refresh_token: str):
        response.set_cookie(
            key="accessToken",
            value=access_token,
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=20 * 60,  # 20 minutes
        )
        response.set_cookie(
            key="refreshToken",
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=30 * 24 * 60 * 60,  # 30 days
        )