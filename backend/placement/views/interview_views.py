from rest_framework import viewsets
from ..models import Interview
from ..serializers import InterviewSerializer

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