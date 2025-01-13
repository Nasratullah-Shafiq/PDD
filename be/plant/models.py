from django.db import models
from user.models import Diagnostic

class Plant(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    class Meta:
        db_table = 'plants'
        verbose_name = 'plant'
        verbose_name_plural = 'plant'


class Disease(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    plant = models.ForeignKey(
        Plant,
        on_delete=models.CASCADE,
        related_name='diseases'
    )

    class Meta:
        db_table = 'diseases'
        verbose_name = 'disease'
        verbose_name_plural = 'diseases'



class Cure(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'cures'
        verbose_name = 'cure'
        verbose_name_plural = 'cures'


class CureDisease(models.Model):
    cure = models.ForeignKey(
        Cure,
        on_delete=models.CASCADE,
    )

    disease = models.ForeignKey(
        Disease,
        on_delete=models.CASCADE,
    )

    class Meta:
        db_table = 'cures_diseases'
        verbose_name = 'cure_disease'
        verbose_name_plural = 'cures_diseases'