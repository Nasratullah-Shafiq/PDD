from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
import os
import numpy as np
import glob 
import matplotlib.pyplot as plt 
import tensorflow_hub as hub
from tensorflow_hub import KerasLayer
from rest_framework.parsers import MultiPartParser, FormParser
from tensorflow.keras.preprocessing import image
from django.conf import settings
from io import BytesIO
from user.serializers import DiagnosticSerializer, DiagnosticDetailSerializer
from plant.serializers import DiseaseSerializer
from django.shortcuts import get_object_or_404
from plant.models import Plant, Disease, CureDisease
from user.models import Diagnostic
from plant.serializers import CureDiseaseSerializer
from copy import deepcopy
from django.conf import settings

class DiagnosticView(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def get(self, request: Request):
        diagnostics = Diagnostic.objects.all()
        serializer = DiagnosticDetailSerializer(diagnostics, many=True)
        return Response(
            serializer.data
        , status=status.HTTP_200_OK)

    def post(self, request: Request):
        # loading model
        
        model = settings.MODEL

        uploaded_image = request.FILES.get("image")

        image_data = BytesIO(uploaded_image.read())

        if not image_data:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        img = image.load_img(image_data, target_size=(224, 224))
        imageArray = image.img_to_array(img)
        imageArray = np.expand_dims(imageArray, axis=0)


        # Make a prediction
        prediction = model.predict(imageArray)

        # Print the predicted class
        categories = settings.CATEGORIES
        predicted_class = np.argmax(prediction)
        result: str = categories[predicted_class]

        # save the prediction
        is_infected = not "healthy" in result.lower()

        plant_name = result.split('___')[0]
        plant_obj = Plant.objects.filter(name__icontains=plant_name).first()

        if is_infected:
            disease = Disease.objects.filter(name=result).first()
        else:
            result = 'healthy'
            disease = None

        if not plant_obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        diagnostic_data = deepcopy(request.data)
        diagnostic_data['plant'] = plant_obj.id
        diagnostic_data['plant_image'] = uploaded_image.name

        cures = None
        cureDiseases = None

        print(result)

        if is_infected: 
            diagnostic_data['disease'] = disease.id
            cureDiseases = CureDisease.objects.filter(disease=disease.id)
        else:
            diagnostic_data['disease'] = None

        if cureDiseases != None:
            cures = CureDiseaseSerializer(cureDiseases, many=True).data

        diagnostic_data['is_infected'] = is_infected


        serializer = DiagnosticSerializer(data=diagnostic_data)

        if not serializer.is_valid():
            return Response(
                serializer.errors
                , status=status.HTTP_400_BAD_REQUEST
            )
        
        serializer.save()

        data = {
            'is_infected': is_infected,
            'plant': plant_name,
            'disease': DiseaseSerializer(disease).data if disease is not None else "Plant Leaf is Healthy",
            'cures': cures
        }

        return Response(data, status=status.HTTP_201_CREATED)

        