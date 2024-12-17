from django.db import models

class Interview(models.Model):
    student = models.ForeignKey('placement.Student', on_delete=models.CASCADE)
    company = models.ForeignKey('placement.Company', on_delete=models.CASCADE)
    job = models.ForeignKey('placement.Job', on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=20, choices=[
        ('scheduled', 'Scheduled'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')
    ])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.name} - {self.company.name} Interview"