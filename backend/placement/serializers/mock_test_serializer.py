from rest_framework import serializers
from ..models import MockTest

class MockTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MockTest
        fields = '__all__'