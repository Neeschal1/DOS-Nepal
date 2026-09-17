from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from apps.tests.models.entities import MockTest, Question, StudentAttempt


class QuestionInline(TabularInline):
    model = Question
    extra = 3
    fields = ['order', 'question_text', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_answer', 'explanation']


@admin.register(MockTest)
class MockTestAdmin(ModelAdmin):
    list_display = ['title', 'domain', 'duration_minutes', 'total_questions', 'is_active', 'created_at']
    list_filter = ['domain', 'is_active']
    search_fields = ['title', 'description']
    readonly_fields = ['created_at', 'updated_at']
    inlines = [QuestionInline]

    def total_questions(self, obj):
        return obj.questions.count()
    total_questions.short_description = 'Questions'


@admin.register(Question)
class QuestionAdmin(ModelAdmin):
    list_display = ['question_text', 'test', 'correct_answer', 'order']
    list_filter = ['test__domain', 'correct_answer']
    search_fields = ['question_text']


@admin.register(StudentAttempt)
class StudentAttemptAdmin(ModelAdmin):
    list_display = ['student', 'test', 'score', 'total_questions', 'submitted_at']
    list_filter = ['test__domain']
    readonly_fields = ['submitted_at', 'answers']
    search_fields = ['student__first_name', 'student__last_name', 'test__title']
