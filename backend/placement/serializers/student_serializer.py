from rest_framework import serializers
from ..models.student import Student
from .base_serializer import BaseModelSerializer

class StudentSerializer(BaseModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'email', 'course', 'grades', 'skills', 'resume', 'created_at', 'updated_at']