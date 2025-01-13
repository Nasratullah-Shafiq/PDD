from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from plant.serializers import PlantSerializer, DiseaseSerializer, CureSerializer, CureDiseaseSerializer


class PlantView(APIView):
    def post(self, request: Request):
        serializer = PlantSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(status=status.HTTP_200_OK)
    

class DiseaseView(APIView):
    def post(self, request: Request):
        serializer = DiseaseSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(status=status.HTTP_200_OK)


class CureView(APIView):
    def post(self, request: Request):
        serializer = CureSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(status=status.HTTP_200_OK)


class CureDisease(APIView):
    def post(self, request: Request):
        serializer = CureDiseaseSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(status=status.HTTP_200_OK)
