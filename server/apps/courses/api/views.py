from rest_framework import status, viewsets
from rest_framework.response import Response
from apps.courses.api.serializers import *
from rest_framework.permissions import AllowAny


class CoursesSerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        courses = Courses.objects.all().order_by('id')
        serializer = CoursesSerializers(courses, many=True)
        
        return Response({'success': True, 'message': 'Courses fetched successfully.', 'count': courses.count(), 'data': serializer.data}, status=status.HTTP_200_OK)


class AdvertismentsSerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        advertisments = Advertisments.objects.all().order_by('id')
        serializer = AdvertismentsSerializers(advertisments, many=True)
        
        return Response({'success': True, 'message': 'Advertisments fetched successfully.', 'count': advertisments.count(), 'data': serializer.data}, status=status.HTTP_200_OK)
    
    
class MentorsSerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        mentors = Mentors.objects.all().order_by('id')
        serializer = MentorsSerializers(mentors, many=True)
        
        return Response({'success': True, 'message': 'Mentors fetched successfully.', 'count': mentors.count(), 'data': serializer.data}, status=status.HTTP_200_OK)
    
    
class GallerySerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        gallery = Gallery.objects.all().order_by('id')
        serializer = GallerySerializers(gallery, many=True)
        
        return Response({'success': True, 'message': 'Galleries fetched successfully.', 'count': gallery.count(), 'data': serializer.data}, status=status.HTTP_200_OK)
    
    
class GallerySerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        gallery = Gallery.objects.all().order_by('id')
        serializer = GallerySerializers(gallery, many=True)
        
        return Response({'success': True, 'message': 'Galleries fetched successfully.', 'count': gallery.count(), 'data': serializer.data}, status=status.HTTP_200_OK)
