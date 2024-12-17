from django.contrib import admin
from .models import Student, Company, Job, Interview, MockTest, Feedback

admin.site.register(Student)
admin.site.register(Company)
admin.site.register(Job)
admin.site.register(Interview)
admin.site.register(MockTest)
admin.site.register(Feedback)