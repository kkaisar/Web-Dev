from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializerS(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

class VacancySerializerS(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    salary = serializers.IntegerField()


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description')

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('name', 'salary', 'company')

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
