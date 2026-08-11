from rest_framework import serializers
from apps.courses.models.entities import *


class AdvertismentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Advertisments
        fields = ['relatedAdvertisment', 'thumbnail', 'redirect']
        extra_kwargs = {
            'relatedAdvertisment': {'required': True},
            'thumbnail': {'required': True},
            'redirect': {'required': True},
        }
        
        
class StatisticsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Statistics
        fields = ['domain', 'students', 'mentors', 'successRate', 'batches']
        extra_kwargs = {
            'domain': {'required': True},
            'students': {'required': True},
            'mentors': {'required': True},
            'successRate': {'required': True},
            'batches': {'required': True},
        }
        

class MentorsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Mentors
        fields = ['domain', 'mentorname', 'gender', 'mentorimage', 'description', 'address', 'phone', 'email', 'facebookurl', 'linkedinurl', 'instagramurl', 'twitterurl', 'tiktokurl']
        extra_kwargs = {
            'domain': {'required': True},
            'mentorname': {'required': True},
            'gender': {'required': True},
            'mentorimage': {'required': True},
            'description': {'required': True},
            'address': {'required': True},
            'phone': {'required': True},
            'email': {'required': True},
            'facebookurl': {'required': True},
            'instagramurl': {'required': True},
            'linkedinurl': {'required': True},
            'twitterurl': {'required': True},
            'tiktokurl': {'required': True},
        }
        
        
class GallerySerializers(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['domain', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8']
        extra_kwargs = {
            'domain': {'required': True},
            'image1': {'required': True},
            'image2': {'required': True},
            'image3': {'required': True},
            'image4': {'required': True},
            'image5': {'required': True},
            'image6': {'required': True},
            'image7': {'required': True},
            'image8': {'required': True},
        }
        
        
class LanguagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Languages
        fields = ['domain', 'languageLevel1', 'languageLevel2', 'languageLevel3', 'languageLevel4']
        extra_kwargs = {
            'domain': {'required': True},
            'languageLevel1': {'required': True},
            'languageLevel2': {'required': True},
            'languageLevel3': {'required': True},
            'languageLevel4': {'required': True},
        }
        
        
class FeaturesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Features
        fields = ['domain', 'feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7', 'feature8']
        extra_kwargs = {
            'domain': {'required': True},
            'feature1': {'required': True},
            'feature2': {'required': True},
            'feature3': {'required': True},
            'feature4': {'required': True},
            'feature5': {'required': True},
            'feature6': {'required': True},
            'feature7': {'required': True},
            'feature8': {'required': True}
        }
        

class CoursesSerializers(serializers.ModelSerializer):
    advertisements = AdvertismentsSerializers(many=True, read_only=True)
    mentors = MentorsSerializers(many=True, read_only=True)
    gallery = GallerySerializers(read_only=True)
    languages = LanguagesSerializers(read_only=True)
    features = FeaturesSerializers(read_only=True)
    stats = StatisticsSerializers(read_only=True)
    class Meta:
        model = Courses
        fields = ["id", "image", "slug", "title", "subHeading", "description", "duration", "mode", "level", "classTiming", "certificate", "languages", "features", "advertisements", "mentors", "gallery", "stats"]