from rest_framework.response import Response
from rest_framework import status
from .sms_service import SendOTP
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.core.cache import cache


class UserAuth:
    # initial credentials verification
    def _verifycredentials(self, firstname: str, lastname: str, username: str, email: str) -> Response:
        try:
            userName = User.objects.filter(username=username).exists()
            userEmail = User.objects.filter(email=email).exists()
            
            if userName == True or userEmail == True:
                return Response({"message": "The entered username or email already exists! Try again with a different credentials :)"}, status=status.HTTP_400_BAD_REQUEST)
            
            fullname = f"{firstname} {lastname}"
            otp_services = SendOTP._send_sms(email, fullname)
            
            if otp_services['success'] == True:
                return Response({"message": "OTP sent successfully to your entered email!"}, status=status.HTTP_200_OK)
            
            return Response({"message": "Failed to send OTP to entered email, Try again later!"}, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": str(e)}, status=status.HTTP_417_EXPECTATION_FAILED)
        
    
    # otp code verification
    def _verifyotpcode(self, mail: str, entered_otp: str) -> Response:
        try:
            userEmail = User.objects.filter(email=mail).exists()
            
            if userEmail == True:
                return Response({"message": "An account already registered with the entered email!"}, status=status.HTTP_400_BAD_REQUEST)
            
            otpcode = cache.get(f"userinfo_{mail}")
            if not otpcode:
                return Response({"message": "OTP not found, or might have been expired. Please request a new one!"}, status=status.HTTP_404_NOT_FOUND)
            
            if otpcode["otp"] != entered_otp:
                return Response({"message": "The entered OTP is incorrect. Please check the code correctly and try again!"}, status=status.HTTP_400_BAD_REQUEST)
            
            credentials = {
                "email": mail,
                "status": True
            }
            cache.set(f"{mail}'s_activation_info", credentials, timeout=600)
            
            return Response({"message": "Your account is successfully verified :)"}, status=status.HTTP_202_ACCEPTED)
            
        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": str(e)}, status=status.HTTP_417_EXPECTATION_FAILED)
    
    
    # new account registration
    def _signup(self, firstName: str, LastName: str, email: str, userName: str, passWord: str) -> Response:
        try:
            not_a_unique_email = User.objects.filter(email=email).exists()
            not_a_unique_username = User.objects.filter(username = userName).exists()
            
            if not_a_unique_email == True:
                return Response({"Message": "An account with this email already exists."}, status=status.HTTP_409_CONFLICT)
            
            if not_a_unique_username == True:
                return Response({"Message":"An account is already signed up with the entered phone number!"}, status=status.HTTP_409_CONFLICT)
            
            user = User.objects.create(
                first_name=firstName,
                last_name=LastName,
                username=userName,
                email=email,
                password=make_password(passWord),
            )

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
            )

            response.set_cookie(
                key="refreshToken",
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite="Lax",
                max_age=30 * 24 * 60 * 60,
            )
            return response
        
        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": str(e)}, status=status.HTTP_417_EXPECTATION_FAILED)
        
    
    # login an account
    def _login(self, email: str, password: str) -> Response:
        try:
            try:
                user = User.objects.get(email = email)
            except User.DoesNotExist:
                 return Response({"Message":"User didn't found with the email provided. So sorry for your inconvenience :("}, status=status.HTTP_404_NOT_FOUND)
            
            match_password = check_password(password, user.password)
            if not match_password:
                return Response({"Message":"Invalid Credentials. So Sorry :("}, status=status.HTTP_401_UNAUTHORIZED)
            
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
            )
            
            response.set_cookie(
                key="refreshToken",
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite="Lax",
                max_age=30 * 24 * 60 * 60,
            )
            
            if match_password:
                return response
            
        except Exception as e:
            return Response({"Message": "Something went wrong!", "Exception": e}, status=status.HTTP_417_EXPECTATION_FAILED)
    