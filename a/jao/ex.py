class Pessoa:
    def __init__(self, nome, idade, altura, profissao, salario):
        self.nome = nome
        self.idade = idade
        self.altura = altura
        self.profissao = profissao
        self.salario = salario

    def aumento(self, percentual):
        self.salario *= (1 + percentual/100)
        print(f"{self.nome} teve um aumento de {percentual}% e agora ganha R${self.salario:.2f}")

    def andar(self):
        print(f"{self.nome} está andando.")

    def aniversario(self):
        self.idade += 1
        print(f"Feliz aniversário! {self.nome} completou {self.idade} anos.")

    def dormir(self):
        print(f"{self.nome} está dormindo.")

pessoa1 = Pessoa("Osvaldo", 30, 1.75, "Padeiro", 5000)

pessoa1.andar()
pessoa1.aumento(10)
pessoa1.aniversario()
pessoa1.dormir()
