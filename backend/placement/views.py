from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Student, Company, Job, Interview, MockTest, Feedback
from .serializers import (
    StudentSerializer, CompanySerializer, JobSerializer,
    InterviewSerializer, MockTestSerializer, FeedbackSerializer
)

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    parser_classes = (MultiPartParser, FormParser)

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_queryset(self):
        queryset = Job.objects.all()
        company_id = self.request.query_params.get('company', None)
        if company_id:
            queryset = queryset.filter(company_id=company_id)
        return queryset

class InterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all()
    serializer_class = InterviewSerializer

    def get_queryset(self):
        queryset = Interview.objects.all()
        student_id = self.request.query_params.get('student', None)
        company_id = self.request.query_params.get('company', None)
        if student_id:
            queryset = queryset.filter(student_id=student_id)
        if company_id:
            queryset = queryset.filter(company_id=company_id)
        return queryset

class MockTestViewSet(viewsets.ModelViewSet):
    queryset = MockTest.objects.all()
    serializer_class = MockTestSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer