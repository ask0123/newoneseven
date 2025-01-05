from rest_framework import serializers
from ..models import Job, Company

class JobSerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(source='company.name', read_only=True)
    
    class Meta:
        model = Job
        fields = [
            'id',  # Added id back as it's usually needed
            'company', 
            'company_name',
            'title', 
            'description', 
            'required_skills',
            'deadline',
            'salary_range',
            'location',
            'job_type',
            'is_active',
            'created_at',
            'updated_at'
        ]

    def validate_company(self, value):
        try:
            company = Company.objects.get(id=value.id)
            return company
        except Company.DoesNotExist:
            raise serializers.ValidationError(f"Company with id {value.id} does not exist")

    def validate(self, data):
        # Additional validation if needed
        if 'deadline' in data and data['deadline'] is None:
            raise serializers.ValidationError({"deadline": "Deadline is required"})
            
        if 'company' not in data:
            raise serializers.ValidationError({"company": "Company is required"})
            
        return data