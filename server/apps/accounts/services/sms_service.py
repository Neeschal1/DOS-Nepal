from brevo import Brevo
from env_config import Config
from celery import shared_task
from django.core.cache import cache
from brevo.transactional_emails import (SendTransacEmailRequestSender, SendTransacEmailRequestToItem)
import random


class SendOTP:
    def mail_contents(name, otp):
        return f"""<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>DOS Nepal - Verify Your Email</title>
                </head>
                <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:40px 0;">
                    <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

                                <!-- Header -->
                                <tr>
                                    <td align="center" style="background:#0F172A;padding:35px;">
                                        <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:bold;">
                                            DOS Nepal
                                        </h1>

                                        <p style="margin:10px 0 0;color:#cbd5e1;font-size:15px;">
                                            Learn Today, Earn Tomorrow
                                        </p>
                                    </td>
                                </tr>

                                <!-- Body -->
                                <tr>
                                    <td style="padding:45px;">

                                        <h2 style="margin:0;color:#111827;font-size:24px;">
                                            Verify Your Email
                                        </h2>

                                        <p style="margin:20px 0;color:#4b5563;font-size:16px;line-height:28px;">
                                            Hi <strong>{name}</strong>,
                                        </p>

                                        <p style="margin:0;color:#4b5563;font-size:16px;line-height:28px;">
                                            Thank you for registering with
                                            <strong>DOS Nepal</strong>.
                                            Please use the verification code below to complete
                                            your account registration.
                                        </p>

                                        <!-- OTP -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin:35px 0;">
                                            <tr>
                                                <td align="center">

                                                    <div style="
                                                        display:inline-block;
                                                        background:#2563EB;
                                                        color:#ffffff;
                                                        font-size:34px;
                                                        font-weight:bold;
                                                        letter-spacing:10px;
                                                        padding:20px 40px;
                                                        border-radius:10px;
                                                    ">
                                                        {otp}
                                                    </div>

                                                </td>
                                            </tr>
                                        </table>

                                        <p style="color:#4b5563;font-size:15px;line-height:26px;">
                                            This OTP will expire in
                                            <strong>2 minutes</strong>.
                                        </p>

                                        <p style="color:#4b5563;font-size:15px;line-height:26px;">
                                            If you didn't request this verification code,
                                            you can safely ignore this email.
                                        </p>

                                        <hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;">

                                        <p style="margin:0;color:#6b7280;font-size:14px;line-height:24px;">
                                            Need help?
                                            Contact our support team anytime.
                                        </p>

                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td align="center" style="background:#f8fafc;padding:25px;">

                                        <p style="margin:0;color:#6b7280;font-size:14px;">
                                            © 2026 DOS Nepal. All rights reserved.
                                        </p>

                                        <p style="margin:10px 0 0;color:#94a3b8;font-size:13px;">
                                            Professional IT Training • German Language • Korean Language • Accounting
                                        </p>

                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                </table>

                </body>
                </html>"""
        
        
    # @shared_task
    def _send_sms(email: str, fullname: str):
        try:
            client = Brevo(api_key=Config.SMTP_API_KEY)
            otpcode = random.randint(100000, 999999)
            
            result = client.transactional_emails.send_transac_email(
                subject="OTP Verification for Account Signup!",
                html_content=SendOTP.mail_contents(fullname, otpcode),
                sender=SendTransacEmailRequestSender(
                    name=f"{Config.SMS_NAME}",
                    email=f"{Config.SMS_EMAIL}",
                ),
                to=[
                    SendTransacEmailRequestToItem(
                        email=email,
                        name=f"{fullname}",
                    )
                ],
            )
            cached_data = {"mail":email, "otp": f"{otpcode}"}
            cache.set(f"userinfo_{email}", cached_data, timeout=120)
            return {"success": True, "response": result.json(), "otpcode": otpcode}

        except Exception as e:
            return {"success": False, "response": e}
