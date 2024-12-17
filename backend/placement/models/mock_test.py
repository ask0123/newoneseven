from django.db import models

class MockTest(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    link = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name