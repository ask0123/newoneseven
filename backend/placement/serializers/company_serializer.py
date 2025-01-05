# company_serializer.py
from rest_framework import serializers
from ..models import Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
    
    def validate(self, data):
        # Add custom validation if needed
        errors = {}
        
        # Check required fields
        required_fields = ['name', 'industry', 'contact_person', 'email', 'phone']
        for field in required_fields:
            if not data.get(field):
                errors[field] = "This field is required."
        
        # Email validation
        if data.get('email'):
            # Basic email format check
            import re
            email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
            if not re.match(email_regex, data.get('email')):
                errors['email'] = "Enter a valid email address."
        
        # Phone number validation (optional, adjust as needed)
        if data.get('phone'):
            # Remove any non-digit characters and check length
            phone = ''.join(filter(str.isdigit, data.get('phone')))
            if len(phone) < 10:
                errors['phone'] = "Phone number must be at least 10 digits."
        
        if errors:
            raise serializers.ValidationError(errors)
        
        return data