from django.db import models
from .choices import *


class Courses(models.Model):
    image = models.URLField(blank=False)
    slug = models.CharField(max_length=15, blank=False, choices=course_type)
    title = models.CharField(max_length=15, blank=False, choices=courses_choices)
    subHeading = models.TextField(blank=False)
    description = models.TextField(blank=False)
    duration = models.CharField(max_length=15, choices=duration, blank=False)
    mode = models.CharField(max_length=20, choices=mode_choice, blank=False)
    level = models.CharField(max_length=50, choices=level_choice, blank=False)
    classTiming = models.CharField(max_length=50, choices=classTiming_choices, blank=False)
    certificate = models.BooleanField(default=False, blank=False)
    
    def __str__(self):
        return f"{self.title} -> {self.slug}"
    

class Advertisments(models.Model):
    relatedAdvertisment = models.ForeignKey(Courses, on_delete=models.CASCADE, related_name="advertisements")
    thumbnail = models.URLField(blank=False)
    redirect = models.URLField(blank=False)
    
    def __str__(self):
        return f"Advertisment for: {self.relatedAdvertisment.title}"
    
    
class Mentors(models.Model):
    domain = models.ForeignKey(Courses, on_delete=models.CASCADE, related_name="mentors")
    mentorname = models.CharField(max_length=30, blank=False)
    gender = models.BooleanField(default=True)
    mentorimage = models.URLField(blank=False)
    description = models.TextField(blank=False)
    address = models.CharField(max_length=50, blank=False)
    phone = models.CharField(max_length=50, blank=False)
    email = models.CharField(max_length=50, blank=False)
    facebookurl = models.URLField(default="https://www.facebook.com/dosmultiservices")
    instagramurl = models.URLField(default="https://www.facebook.com/dosmultiservices")
    linkedinurl = models.URLField(default="https://www.facebook.com/dosmultiservices")
    twitterurl = models.URLField(default="https://www.facebook.com/dosmultiservices")
    tiktokurl = models.URLField(default="https://www.facebook.com/dosmultiservices")
    
    def __str__(self):
        return f"{self.mentorname} assigned to {self.domain.title}"
    

class Gallery(models.Model):
    domain = models.OneToOneField(Courses, on_delete=models.CASCADE, related_name="gallery")
    image1 = models.URLField(blank=False)
    image2 = models.URLField(blank=False)
    image3 = models.URLField(blank=False)
    image4 = models.URLField(blank=False)
    image5 = models.URLField(blank=False)
    image6 = models.URLField(blank=False)
    image7 = models.URLField(blank=False)
    image8 = models.URLField(blank=False)
    
    def __str__(self):
        return f"{self.domain.title}'s gallery"


class Languages(models.Model):
    domain = models.OneToOneField(Courses, on_delete=models.CASCADE, related_name="languages")
    languageLevel1 = models.CharField(max_length=15, blank=True, choices=languageLevels_choice)
    languageLevel2 = models.CharField(max_length=15, blank=True, choices=languageLevels_choice)
    languageLevel3 = models.CharField(max_length=15, blank=True, choices=languageLevels_choice)
    languageLevel4 = models.CharField(max_length=15, blank=True, choices=languageLevels_choice)
    
    def __str__(self):
        return f"{self.domain.title}'s Languages Levels"
    

class Features(models.Model):
    domain = models.OneToOneField(Courses, on_delete=models.CASCADE, related_name="features")
    feature1 = models.CharField(max_length=50, blank=False, choices=features_choices)
    feature2 = models.CharField(max_length=50, blank=False, choices=features_choices)
    feature3 = models.CharField(max_length=50, blank=False, choices=features_choices)
    feature4 = models.CharField(max_length=50, blank=False, choices=features_choices)
    feature5 = models.CharField(max_length=50, blank=True, choices=features_choices)
    feature6 = models.CharField(max_length=50, blank=True, choices=features_choices)
    feature7 = models.CharField(max_length=50, blank=True, choices=features_choices)
    feature8 = models.CharField(max_length=50, blank=True, choices=features_choices)
    
    def __str__(self):
        return f"{self.domain.title}'s Features"
    
    
class Statistics(models.Model):
    domain = models.OneToOneField(Courses, on_delete=models.CASCADE, related_name="stats")
    students = models.IntegerField(blank=False)
    mentors = models.IntegerField(blank=False)
    successRate = models.IntegerField(blank=False)
    batches = models.IntegerField(blank=False)
    
    def __str__(self):
        return f"{self.domain.title}'s stats details!"