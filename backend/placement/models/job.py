from django.db import models
from .base_model import BaseModel
from .company import Company

class Job(BaseModel):
    company = models.ForeignKey(
        Company, 
        on_delete=models.CASCADE, 
        related_name='jobs'
    )
    title = models.CharField(max_length=100)
    description = models.TextField()
    required_skills = models.TextField()
    deadline = models.DateField()
    salary_range = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    job_type = models.CharField(
        max_length=20,
        choices=[
            ('FULL_TIME', 'Full Time'),
            ('PART_TIME', 'Part Time'),
            ('INTERNSHIP', 'Internship'),
            ('CONTRACT', 'Contract')
        ],
        default='FULL_TIME'
    )
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} at {self.company.name}"

    class Meta:
        db_table = 'placement_job'
        managed = True
        ordering = ['-created_at']
        verbose_name = 'Job'
        verbose_name_plural = 'Jobs'