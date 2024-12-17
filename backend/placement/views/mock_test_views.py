from rest_framework import viewsets
from ..models import MockTest
from ..serializers import MockTestSerializer

class MockTestViewSet(viewsets.ModelViewSet):
    queryset = MockTest.objects.all()
    serializer_class = MockTestSerializer