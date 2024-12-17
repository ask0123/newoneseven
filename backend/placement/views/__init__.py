from .student_views import StudentViewSet
from .company_views import CompanyViewSet
from .job_views import JobViewSet
from .interview_views import InterviewViewSet
from .mock_test_views import MockTestViewSet
from .feedback_views import FeedbackViewSet

__all__ = [
    'StudentViewSet',
    'CompanyViewSet',
    'JobViewSet',
    'InterviewViewSet',
    'MockTestViewSet',
    'FeedbackViewSet'
]