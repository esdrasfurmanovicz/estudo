import math

def calcular_area_circulo(raio):
  area = math.pi * raio**2
  return area

raio = float(input("Digite o valor do raio do círculo: "))

area = calcular_area_circulo(raio)

print("A área do círculo é:", area)