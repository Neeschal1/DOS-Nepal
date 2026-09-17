from rest_framework import serializers
from apps.courses.models.resources import Resource


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            'id',
            'domain',
            'title',
            'description',
            'resource_type',
            'resource_url',
            'thumbnail',
            'is_active',
            'uploaded_at',
        ]
        read_only_fields = ['id', 'uploaded_at']

