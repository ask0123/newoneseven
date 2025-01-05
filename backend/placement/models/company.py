from django.db import models
from .base_model import BaseModel

class Company(BaseModel):
    name = models.CharField(max_length=100)
    industry = models.CharField(max_length=100)
    website = models.URLField()
    contact_person = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    eligibility_criteria = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'placement_company'
        managed = True  # Ensure Django manages this table