const mensagensDivertidas = 
[
    "Qual é o desastre natural que os cães mais odeiam? O Fura-cão",
    
    "Qual é a peça de carro que é feita só no Egito? Os faraóis",
   
    "O que o cadarço falou para o tênis? Estou amarradão em você",
    
    "O engenheiro olhou para o espelho. O que aconteceu? O engenheiro civil",
    
    "Na briga entre o esparadrapo e a fita isolante, quem ganhou? A fita isolante, pois ela é faixa preta",
]

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagemDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function(){

    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)]

    mensagemDivertida.textContent =  mensagemAleatoria;
} )