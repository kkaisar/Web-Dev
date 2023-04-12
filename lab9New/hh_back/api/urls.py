from django.urls import path, include
from api import views
urlpatterns = [
    path('companies/', views.Companies.as_view()),
    path('companies/<int:id>/', views.CompaniesById.as_view()),
    path('companies/<int:pk>/vacancies/', views.CompanyIdVacancies.as_view()),
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view())
]