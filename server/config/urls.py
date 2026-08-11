from django.contrib import admin
from django.urls import path, include
from django.urls import re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions


# Swagger setup
schema_view = get_schema_view(
   openapi.Info(
      title="DOS Nepal",
      default_version='v1',
      description="An educational platform dedicated to helping students and professionals build successful careers through quality training. We offer expert-led courses in Accounting and German, Korean, and English language learning, empowering learners with practical skills, language proficiency, and career-focused education.",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

# Regular routings
urlpatterns = [
    # Admin setup
    path('admin/', admin.site.urls),
    
    # JWT pathway
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # installed local applications
    path('accounts/', include('apps.accounts.api.urls')),
    path('employees/', include('apps.employees.api.urls')),
    path('courses/', include('apps.courses.api.urls')),
    
    # swagger docs
    re_path(r'^docs(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
