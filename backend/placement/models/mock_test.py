from django.db import models
from .base_model import BaseModel

class MockTest(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    link = models.URLField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'placement_mock_test'