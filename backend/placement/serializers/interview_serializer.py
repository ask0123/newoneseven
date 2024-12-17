from rest_framework import serializers
from ..models import Interview

class InterviewSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.name', read_only=True)
    company_name = serializers.CharField(source='company.name', read_only=True)
    job_title = serializers.CharField(source='job.title', read_only=True)

    class Meta:
        model = Interview
        fields = '__all__'