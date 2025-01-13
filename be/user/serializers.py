from rest_framework.serializers import ModelSerializer
from user.models import Diagnostic
from plant.serializers import PlantSerializer, DiseaseSerializer


class DiagnosticSerializer(ModelSerializer):
    class Meta:
        model = Diagnostic
        fields = '__all__'


class DiagnosticDetailSerializer(ModelSerializer):
    plant = PlantSerializer()
    disease = DiseaseSerializer()
    class Meta:
        model = Diagnostic
        fields = '__all__'