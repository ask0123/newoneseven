from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from ..models import Student
from ..serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    parser_classes = (MultiPartParser, FormParser)