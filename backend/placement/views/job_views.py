from rest_framework import viewsets, status
from rest_framework.response import Response
from ..models import Job
from ..serializers import JobSerializer
import logging

logger = logging.getLogger(__name__)

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def create(self, request, *args, **kwargs):
        try:
            # Log the incoming request data
            logger.info(f"Received job creation request with data: {request.data}")
            
            serializer = self.get_serializer(data=request.data)
            if not serializer.is_valid():
                logger.error(f"Validation failed. Errors: {serializer.errors}")
                return Response(
                    {
                        "error": "Validation failed",
                        "details": serializer.errors
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            self.perform_create(serializer)
            logger.info(f"Successfully created job with data: {serializer.data}")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            logger.exception("Error creating job")
            return Response(
                {
                    "error": "Failed to create job",
                    "details": str(e)
                },
                status=status.HTTP_400_BAD_REQUEST
            )