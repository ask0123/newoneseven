from django.db import models

class BaseModel(models.Model):
    # Change id to ID to match MySQL's default primary key naming
    id = models.AutoField(primary_key=True, db_column='ID')  
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True