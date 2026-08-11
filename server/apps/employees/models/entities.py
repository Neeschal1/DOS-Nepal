from django.db import models

stories_choices = [
    ('German', 'GERMAN LANGUAGE'),
    ('Korean', 'KOREAN LANGUAGE'),
    ('Accounting', 'ACCOUNTING TRAINING'),
    ('Computer', 'COMPUTER TRAINING'),
]

role_choices = [
    ('Founder', 'FOUNDER'),
    ('Managing Director', 'MANAGING DIRECTOR'),
    ('Director', 'DIRECTOR'),
    ('Chief Executive Officer', 'CHIEF EXECUTIVE OFFICER'),
    ('Chief Operating Officer', 'CHIEF OPERATING OFFICER'),
    ('Principal', 'PRINCIPAL'),
    ('Academic Coordinator', 'ACADEMIC COORDINATOR'),
    ('Department Head', 'DEPARTMENT HEAD'),
    ('Teacher', 'TEACHER'),
    ('Instructor', 'INSTRUCTOR'),
    ('Trainer', 'TRAINER'),
    ('Language Instructor', 'LANGUAGE INSTRUCTOR'),
    ('IT Instructor', 'IT INSTRUCTOR'),
    ('Accounting Trainer', 'ACCOUNTING TRAINER'),
    ('Receptionist', 'RECEPTIONIST'),
    ('Counselor', 'COUNSELOR'),
    ('Admission Officer', 'ADMISSION OFFICER'),
    ('Student', 'STUDENT'),
    ('Intern', 'INTERN'),
    ('Marketing Executive', 'MARKETING EXECUTIVE'),
    ('HR Officer', 'HR OFFICER'),
    ('Finance Officer', 'FINANCE OFFICER'),
    ('Accountant', 'ACCOUNTANT'),
    ('Office Assistant', 'OFFICE ASSISTANT'),
    ('Administrative Officer', 'ADMINISTRATIVE OFFICER'),
    ('IT Support', 'IT SUPPORT'),
    ('Software Developer', 'SOFTWARE DEVELOPER'),
    ('UI/UX Designer', 'UI/UX DESIGNER'),
    ('Graphic Designer', 'GRAPHIC DESIGNER'),
    ('Content Writer', 'CONTENT WRITER'),
    ('Social Media Manager', 'SOCIAL MEDIA MANAGER'),
    ('Photographer', 'PHOTOGRAPHER'),
    ('Videographer', 'VIDEOGRAPHER'),
    ('Volunteer', 'VOLUNTEER'),
    ('Member', 'MEMBER'),
]


class Base(models.Model):
    name = models.CharField(max_length=50, blank=False)
    image = models.URLField()
    address = models.CharField(max_length=255, blank=True, default="Confidential!")
    description = models.TextField(blank=False)
    
    class Meta:
        abstract=True


class Employees(Base):
    role = models.CharField(choices=role_choices, max_length=30, blank=False, default="Member")
    gender = models.BooleanField(default=True)
    phoneNumber = models.CharField(max_length=15, blank=True, default="Confidential!")
    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    tiktok = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    
    def __str__(self):
        if self.gender == True:
            return f"Mr. {self.name}"
        return f"Ms. {self.name}"
    
    
class Stories(Base):
    enrolled_in = models.CharField(max_length=30, choices=stories_choices)
    
    def __str__(self):
        return f"Ms. {self.name}"
