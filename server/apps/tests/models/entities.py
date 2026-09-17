from django.db import models
from django.contrib.auth.models import User

DOMAIN_CHOICES = [
    ('German', 'German Language'),
    ('Korean', 'Korean Language'),
    ('Accounting', 'Accounting Training'),
    ('Computer', 'Computer Training'),
]


class MockTest(models.Model):
    """
    A mock test created by the admin for a specific domain.
    Students can only see tests matching their enrolled domain.
    """
    domain = models.CharField(max_length=30, choices=DOMAIN_CHOICES, blank=False)
    title = models.CharField(max_length=150, blank=False)
    description = models.TextField(blank=True, default='')
    duration_minutes = models.IntegerField(default=30)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Mock Test'
        verbose_name_plural = 'Mock Tests'
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.domain}] {self.title}"

    @property
    def total_questions(self):
        return self.questions.count()


class Question(models.Model):
    """
    MCQ question belonging to a MockTest.
    """
    ANSWER_CHOICES = [('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D')]

    test = models.ForeignKey(
        MockTest,
        on_delete=models.CASCADE,
        related_name='questions'
    )
    question_text = models.TextField(blank=False)
    option_a = models.CharField(max_length=300, blank=False)
    option_b = models.CharField(max_length=300, blank=False)
    option_c = models.CharField(max_length=300, blank=False)
    option_d = models.CharField(max_length=300, blank=False)
    correct_answer = models.CharField(max_length=1, choices=ANSWER_CHOICES, blank=False)
    explanation = models.TextField(blank=True, default='')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'
        ordering = ['order', 'id']

    def __str__(self):
        return f"Q{self.order}: {self.question_text[:60]}"


class StudentAttempt(models.Model):
    """
    Records a student's attempt at a MockTest, including answers and score.
    """
    student = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='test_attempts'
    )
    test = models.ForeignKey(
        MockTest,
        on_delete=models.CASCADE,
        related_name='attempts'
    )
    score = models.IntegerField(default=0)
    total_questions = models.IntegerField(default=0)
    answers = models.JSONField(default=dict)  # {question_id: chosen_answer}
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Student Attempt'
        verbose_name_plural = 'Student Attempts'
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.student.get_full_name()} — {self.test.title} | Score: {self.score}/{self.total_questions}"

    @property
    def percentage(self):
        if self.total_questions == 0:
            return 0
        return round((self.score / self.total_questions) * 100, 1)

    @property
    def passed(self):
        return self.percentage >= 50
