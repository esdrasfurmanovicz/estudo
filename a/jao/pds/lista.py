def calcular_media():
  notas = []
  while True:
    nota = input("Digite uma nota (ou 'q' para sair): ")
    if nota.lower() == 'q':
      break
    try:
      nota = float(nota)
      notas.append(nota)
    except ValueError:
      print("Entrada inválida. Por favor, digite um número ou 'q'.")

  if notas:
    media = sum(notas) / len(notas)
    print("A média das notas é:", media)
  else:
    print("Nenhuma nota foi inserida.")

calcular_media()