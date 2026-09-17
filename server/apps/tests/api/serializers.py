from rest_framework import serializers
from apps.tests.models.entities import MockTest, Question, StudentAttempt


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'id',
            'question_text',
            'option_a',
            'option_b',
            'option_c',
            'option_d',
            'order',
        ]
        # NOTE: correct_answer is intentionally excluded from list view
        # It is revealed only in results after submission


class QuestionWithAnswerSerializer(serializers.ModelSerializer):
    """Used in results – includes correct_answer and explanation."""
    class Meta:
        model = Question
        fields = [
            'id',
            'question_text',
            'option_a',
            'option_b',
            'option_c',
            'option_d',
            'correct_answer',
            'explanation',
            'order',
        ]


class MockTestListSerializer(serializers.ModelSerializer):
    total_questions = serializers.IntegerField(read_only=True)

    class Meta:
        model = MockTest
        fields = [
            'id',
            'domain',
            'title',
            'description',
            'duration_minutes',
            'total_questions',
            'is_active',
            'created_at',
        ]


class MockTestDetailSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    total_questions = serializers.IntegerField(read_only=True)

    class Meta:
        model = MockTest
        fields = [
            'id',
            'domain',
            'title',
            'description',
            'duration_minutes',
            'total_questions',
            'questions',
            'created_at',
        ]


class SubmitAttemptSerializer(serializers.Serializer):
    """Payload for submitting answers: {question_id: chosen_answer}"""
    answers = serializers.DictField(child=serializers.ChoiceField(choices=['A', 'B', 'C', 'D']))


class StudentAttemptSerializer(serializers.ModelSerializer):
    test_title = serializers.CharField(source='test.title', read_only=True)
    test_domain = serializers.CharField(source='test.domain', read_only=True)
    percentage = serializers.FloatField(read_only=True)
    passed = serializers.BooleanField(read_only=True)

    class Meta:
        model = StudentAttempt
        fields = [
            'id',
            'test',
            'test_title',
            'test_domain',
            'score',
            'total_questions',
            'percentage',
            'passed',
            'answers',
            'submitted_at',
        ]
        read_only_fields = ['id', 'submitted_at']
