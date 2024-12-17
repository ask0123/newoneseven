from django.db import models

class Feedback(models.Model):
    user_type = models.CharField(max_length=20, choices=[
        ('student', 'Student'),
        ('company', 'Company'),
        ('placement_officer', 'Placement Officer')
    ])
    comment = models.TextField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_type} Feedback - {self.created_at}"