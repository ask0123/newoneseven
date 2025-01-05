from django.db import models
from .base_model import BaseModel

class Student(BaseModel):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    course = models.CharField(max_length=100)
    grades = models.DecimalField(max_digits=4, decimal_places=2)
    skills = models.TextField()
    resume = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'placement_student'
        managed = True  # Ensure Django manages this table
        verbose_name = 'Student'
        verbose_name_plural = 'Students'