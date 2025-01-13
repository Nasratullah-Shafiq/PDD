from rest_framework.serializers import ModelSerializer
from plant.models import Plant, Diagnostic, Cure, CureDisease, Disease

class PlantSerializer(ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'

class DiagnosticSerializer(ModelSerializer):
    class Meta:
        model = Diagnostic
        fields = '__all__'


class CureSerializer(ModelSerializer):
    class Meta:
        model = Cure
        fields = '__all__'

class DiseaseSerializer(ModelSerializer):
    class Meta:
        model = Disease
        fields = '__all__'


class CureDiseaseSerializer(ModelSerializer):
    cure = CureSerializer()
    class Meta:
        model = CureDisease
        fields = ['cure']

