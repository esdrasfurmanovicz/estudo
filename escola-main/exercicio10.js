let numeroSecreto = Math.floor(Math.random() * 100) + 1;

//Alterei também o tipo de variavel de const para let
let qtdTentativas = 0;

let verificarBotao = document.getElementById("verificarBotao");

let tentativaEntrada = document.getElementById("tentativa");

let dica = document.getElementById("dica");

verificarBotao.addEventListener("click", function () {

    const tentativa = parseInt(tentativaEntrada.value);

    if (tentativa === numeroSecreto) {
		//aqui estava sendo usado aspas simples (') e não crase (`)
        dica.textContent = `Parabéns meu querido! Você acertou em ${qtdTentativas} tentativas`;
        verificarBotao.disabled = true;
    }
    else if (tentativa < numeroSecreto) {
        dica.textContent = "Tente um número maior.";
        qtdTentativas++;
    } else {
        dica.textContent = "Tente um número menor.";
        qtdTentativas++;

    }
});