from rest_framework.urls import path
from user.views import DiagnosticView

urlpatterns = [
    path('', DiagnosticView.as_view(), name='diagnostic')
]
