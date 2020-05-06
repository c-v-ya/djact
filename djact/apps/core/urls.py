from django.urls import re_path
from django.views.generic import TemplateView

app_name = 'core'
urlpatterns = [
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html'), name='index'),
]
