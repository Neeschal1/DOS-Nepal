from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from apps.tests.models.entities import MockTest, Question, StudentAttempt
from .serializers import (
    MockTestListSerializer,
    MockTestDetailSerializer,
    SubmitAttemptSerializer,
    StudentAttemptSerializer,
    QuestionWithAnswerSerializer,
)

# Create your views here.

class MockTestView(viewsets.ViewSet):
    """
    GET  /tests/mock-tests/          – list tests for user's domain
    GET  /tests/mock-tests/{id}/     – get test detail with questions
    POST /tests/mock-tests/{id}/submit/ – submit answers, get scored result
    """
    permission_classes = [IsAuthenticated]

    def list(self, request):
        try:
            profile = getattr(request.user, 'profile', None)
            if not profile:
                return Response(
                    {'success': False, 'message': 'User profile not found.'},
                    status=status.HTTP_404_NOT_FOUND
                )
            domain = profile.domain
            tests = MockTest.objects.filter(domain=domain, is_active=True)
            serializer = MockTestListSerializer(tests, many=True)
            return Response(
                {
                    'success': True,
                    'count': tests.count(),
                    'domain': domain,
                    'data': serializer.data,
                },
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response(
                {'success': False, 'message': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def retrieve(self, request, pk=None):
        try:
            profile = getattr(request.user, 'profile', None)
            if not profile:
                return Response({'success': False, 'message': 'User profile not found.'}, status=404)

            test = MockTest.objects.filter(pk=pk, domain=profile.domain, is_active=True).first()
            if not test:
                return Response({'success': False, 'message': 'Test not found or not available for your domain.'}, status=404)

            serializer = MockTestDetailSerializer(test)
            return Response({'success': True, 'data': serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=500)

    @action(detail=True, methods=['post'], url_path='submit')
    def submit(self, request, pk=None):
        try:
            profile = getattr(request.user, 'profile', None)
            if not profile:
                return Response({'success': False, 'message': 'User profile not found.'}, status=404)

            test = MockTest.objects.filter(pk=pk, domain=profile.domain, is_active=True).first()
            if not test:
                return Response({'success': False, 'message': 'Test not found.'}, status=404)

            serializer = SubmitAttemptSerializer(data=request.data)
            if not serializer.is_valid():
                return Response({'success': False, 'errors': serializer.errors}, status=400)

            submitted_answers = serializer.validated_data['answers']
            questions = test.questions.all()

            # Calculate score
            score = 0
            for question in questions:
                submitted = submitted_answers.get(str(question.id))
                if submitted and submitted.upper() == question.correct_answer.upper():
                    score += 1

            # Save attempt
            attempt = StudentAttempt.objects.create(
                student=request.user,
                test=test,
                score=score,
                total_questions=questions.count(),
                answers=submitted_answers,
            )

            # Build detailed result with correct answers
            questions_with_answers = QuestionWithAnswerSerializer(questions, many=True)

            return Response(
                {
                    'success': True,
                    'message': 'Test submitted successfully!',
                    'result': {
                        'attempt_id': attempt.id,
                        'score': score,
                        'total_questions': questions.count(),
                        'percentage': attempt.percentage,
                        'passed': attempt.passed,
                        'submitted_at': str(attempt.submitted_at),
                        'questions': questions_with_answers.data,
                        'your_answers': submitted_answers,
                    },
                },
                status=status.HTTP_201_CREATED,
            )

        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=500)


class StudentAttemptsView(viewsets.ViewSet):
    """
    GET /tests/my-attempts/ – list all past attempts for the authenticated user
    """
    permission_classes = [IsAuthenticated]

    def list(self, request):
        try:
            attempts = StudentAttempt.objects.filter(student=request.user).select_related('test')
            serializer = StudentAttemptSerializer(attempts, many=True)
            return Response(
                {'success': True, 'count': attempts.count(), 'data': serializer.data},
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=500)
