from django.db import models

DOMAIN_CHOICES = [
    ('German', 'German Language'),
    ('Korean', 'Korean Language'),
    ('Accounting', 'Accounting Training'),
    ('Computer', 'Computer Training'),
]

RESOURCE_TYPE_CHOICES = [
    ('PDF', 'PDF Document'),
    ('Video', 'Video Lecture'),
    ('Article', 'Article / Blog'),
    ('Audio', 'Audio File'),
    ('Link', 'External Link'),
]


class Resource(models.Model):
    """
    Admin-uploaded learning resource linked to a specific domain.
    Students can only see resources matching their enrolled domain.
    """
    domain = models.CharField(max_length=30, choices=DOMAIN_CHOICES, blank=False)
    title = models.CharField(max_length=150, blank=False)
    description = models.TextField(blank=True, default='')
    resource_type = models.CharField(max_length=20, choices=RESOURCE_TYPE_CHOICES, blank=False)
    resource_url = models.URLField(blank=False)
    thumbnail = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Resource'
        verbose_name_plural = 'Resources'
        ordering = ['-uploaded_at']

    def __str__(self):
        return f"[{self.domain}] {self.title} ({self.resource_type})"
