from rest_framework import serializers
from apps.employees.models.entities import Employees, Stories

class EmployeesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ['role', 'gender', 'name', 'description', 'image', 'address', 'phoneNumber', 'facebook', 'instagram', 'tiktok', 'linkedin', 'twitter']
        extra_kwargs = {
            'role': {'required': True},
            'gender': {'required': True},
            'name': {'required': True},
            'image': {'required': True},
            'description': {'required': True},
            'address': {'required': False},
            'phoneNumber': {'required': False},
            'facebook': {'required': False},
            'instagram': {'required': False},
            'tiktok': {'required': False},
            'linkedin': {'required': False},
            'twitter': {'required': False},
        }
        
        
class StoriesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Stories
        fields = ['image', 'name', 'address', 'description', 'enrolled_in'] 
        extra_kwargs = {
            'image': {'required': True},
            'name': {'required': True},
            'address': {'required': True},
            'description': {'required': True},
            'enrolled_in': {'required': True},
        }