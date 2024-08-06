def calcular_area_triangulo(base, altura):
  area = (base * altura) / 2
  return area

base_triangulo = float(input("Digite o valor da base do triângulo: "))
altura_triangulo = float(input("Digite o valor da altura do triângulo: "))

area  = calcular_area_triangulo(base_triangulo, altura_triangulo)

print("A área do triângulo é:", area)