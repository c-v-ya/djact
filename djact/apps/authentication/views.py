from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer


class UserCreate(CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    serializer_class = UserSerializer


user_create = UserCreate.as_view()


class Protected(APIView):
    def get(self, request):
        return Response(data={'type': 'protected'})


protected = Protected.as_view()
