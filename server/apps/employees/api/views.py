from django.shortcuts import render
from apps.employees.models.entities import Employees, Stories
from apps.employees.api.serializers import EmployeesSerializers, StoriesSerializers
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


# Register and operarte employees info
class EmployeesSerializersViews(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    def list(self, request):
        employees = Employees.objects.all().order_by('id')
        serializer = EmployeesSerializers(employees, many=True)

        return Response({'success': True, 'message': 'Employees fetched successfully.', 'count': employees.count(), 'data': serializer.data}, status=status.HTTP_200_OK)


    def retrieve(self, request, pk=None):
        try:
            employee = Employees.objects.get(pk=pk)
        except Employees.DoesNotExist:
            return Response({'success': False, 'message': 'Employee not found.'}, status=status.HTTP_404_NOT_FOUND)

        serializer = EmployeesSerializers(employee)
        return Response({'success': True, 'message': 'Employee fetched successfully.', 'data': serializer.data}, status=status.HTTP_200_OK)


    def create(self, request):
        serializer = EmployeesSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Employee created successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)

        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


    def update(self, request, pk=None):
        try:
            employee = Employees.objects.get(pk=pk)
        except Employees.DoesNotExist:
            return Response({'success': False, 'message': 'Employee not found.'}, status=status.HTTP_404_NOT_FOUND)

        serializer = EmployeesSerializers(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True,'message': 'Employee updated successfully.','data': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

    def destroy(self, request, pk=None):
        try:
            employee = Employees.objects.get(pk=pk)
        except Employees.DoesNotExist:
            return Response({'success': False, 'message': 'Employee not found.'}, status=status.HTTP_404_NOT_FOUND)

        employee.delete()
        return Response({'success': True, 'message': 'Employee deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)


# Student's success stories View
class StorySerializersViews(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    def list(self, request):
        stories = Stories.objects.all().order_by('id')
        serializer = StoriesSerializers(stories, many=True)

        return Response({'success': True, 'message': 'Success stories fetched successfully.', 'count': stories.count(), 'data': serializer.data}, status=status.HTTP_200_OK)


    def retrieve(self, request, pk=None):
        try:
            stories = Stories.objects.get(pk=pk)
        except Stories.DoesNotExist:
            return Response({'success': False, 'message': 'Success story not found.'}, status=status.HTTP_404_NOT_FOUND)

        serializer = StoriesSerializers(stories)
        return Response({'success': True, 'message': 'Success stories fetched successfully.', 'data': serializer.data}, status=status.HTTP_200_OK)


    def create(self, request):
        serializer = StoriesSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Success stories created successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)

        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


    def update(self, request, pk=None):
        try:
            stories = Stories.objects.get(pk=pk)
        except Stories.DoesNotExist:
            return Response({'success': False, 'message': 'Success stories not found.'}, status=status.HTTP_404_NOT_FOUND)

        serializer = StoriesSerializers(stories, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True,'message': 'Success stories updated successfully.','data': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

    def destroy(self, request, pk=None):
        try:
            employee = Stories.objects.get(pk=pk)
        except Stories.DoesNotExist:
            return Response({'success': False, 'message': 'Success stories not found.'}, status=status.HTTP_404_NOT_FOUND)

        employee.delete()
        return Response({'success': True, 'message': 'Success stories deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)