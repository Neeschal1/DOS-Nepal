from django.db import models
from django.contrib.auth.models import User


DOMAIN_CHOICES = [
    ('German', 'German Language'),
    ('Korean', 'Korean Language'),
    ('Accounting', 'Accounting Training'),
    ('Computer', 'Computer Training'),
]


class UserProfile(models.Model):
    """
    One-to-one extension of Django's built-in User model.
    Stores phone number, enrolled domain, and optional profile picture/bio.
    Created automatically when a user signs up.
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    phone_number = models.CharField(max_length=20, unique=True, blank=False)
    domain = models.CharField(max_length=30, choices=DOMAIN_CHOICES, blank=False)
    profile_picture = models.URLField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    enrolled_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'
        ordering = ['-enrolled_at']

    def __str__(self):
        return f"{self.user.get_full_name()} — {self.domain}"
