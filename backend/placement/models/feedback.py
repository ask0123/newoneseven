from django.db import models
from .base_model import BaseModel

class Feedback(BaseModel):
    user_type = models.CharField(max_length=20, choices=[
        ('student', 'Student'),
        ('company', 'Company'),
        ('placement_officer', 'Placement Officer')
    ])
    comment = models.TextField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])

    def __str__(self):
        return f"{self.user_type} Feedback - {self.created_at}"

    class Meta:
        db_table = 'placement_feedback'