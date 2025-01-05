from django.db import models
from .base_model import BaseModel

class Interview(BaseModel):
    student = models.ForeignKey('Student', on_delete=models.CASCADE)
    company = models.ForeignKey('Company', on_delete=models.CASCADE)
    job = models.ForeignKey('Job', on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=20, choices=[
        ('scheduled', 'Scheduled'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')
    ])

    def __str__(self):
        return f"{self.student.name} - {self.company.name} Interview"

    class Meta:
        db_table = 'placement_interview'