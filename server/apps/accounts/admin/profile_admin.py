from django.contrib import admin
from unfold.admin import ModelAdmin
from apps.accounts.models.entities import UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(ModelAdmin):
    list_display = ['user', 'phone_number', 'domain', 'enrolled_at']
    list_filter = ['domain']
    search_fields = ['user__first_name', 'user__last_name', 'user__email', 'phone_number']
    readonly_fields = ['enrolled_at', 'updated_at']
    ordering = ['-enrolled_at']

