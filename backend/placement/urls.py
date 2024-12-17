from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    StudentViewSet, CompanyViewSet, JobViewSet,
    InterviewViewSet, MockTestViewSet, FeedbackViewSet
)

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'companies', CompanyViewSet)
router.register(r'jobs', JobViewSet)
router.register(r'interviews', InterviewViewSet)
router.register(r'mock-tests', MockTestViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),
]