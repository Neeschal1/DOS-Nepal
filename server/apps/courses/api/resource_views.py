from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from apps.courses.models.resources import Resource
from .resource_serializers import ResourceSerializer


class ResourceView(viewsets.ViewSet):
    """
    GET /courses/resources/ – returns resources filtered by the authenticated
    user's enrolled domain (from UserProfile).
    Only active resources are returned.
    """
    permission_classes = [IsAuthenticated]

    def list(self, request):
        try:
            profile = getattr(request.user, 'profile', None)
            if not profile:
                return Response(
                    {'success': False, 'message': 'User profile not found. Please complete your profile.'},
                    status=status.HTTP_404_NOT_FOUND
                )

            domain = profile.domain
            resources = Resource.objects.filter(domain=domain, is_active=True).order_by('-uploaded_at')
            serializer = ResourceSerializer(resources, many=True)

            return Response(
                {
                    'success': True,
                    'message': f'{domain} resources fetched successfully.',
                    'count': resources.count(),
                    'domain': domain,
                    'data': serializer.data,
                },
                status=status.HTTP_200_OK,
            )

        except Exception as e:
            return Response(
                {'success': False, 'message': 'Something went wrong!', 'detail': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

