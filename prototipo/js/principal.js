
window.addEventListener('load', function() {
    // Simule um atraso de 2 segundos (2000 milissegundos) para a tela de carregamento.
    setTimeout(function() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');

        loader.style.opacity = 0;
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
        content.classList.add('show-content');

        // Remova a tela de carregamento após a animação.
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500); // Tempo igual à duração da transição (0.5s).
    }, 2000);
}); 

/* add carro */
let checkNoti = document.querySelector('#checknoti')
checkNoti.addEventListener('click', function(){
    let avBlock = document.querySelector('.avBlock')
    console.log(avBlock)
    if (checkNoti.checked) {
        avBlock.style.display = 'block'
    } else {
        avBlock.style.display = 'none'
    }
})


const pesqu = document.getElementById('form')
pesqu.addEventListener("submit", function (event) {
    event.preventDefault()
    let placa = document.getElementById('placa').value
    let user = document.querySelector('.info')
    let pingo = document.querySelector('#pingo')
    if (placa === 'BRA2E19' || placa === 'bra2e19') {
        user.style.display = 'block'
        pingo.style.display = 'block'
        fundo.style.display = 'none'
    } else {
        alert('Placa inválida!')
    }
})
/* Navegar até tal parte da pagina */
function navigateToDestination(destino) {
    let i = document.querySelector(destino)
    i.scrollIntoView({ behavior: "smooth" });
}

let more1 = document.querySelector('#more1')
let more2 = document.querySelector('#more2')
let veiLac1 = document.querySelector('#veiLac-1')
let veiLac2 = document.querySelector('#veiLac-2')
more1.addEventListener('click', function () {
    let mais1 = document.querySelector('.mais1')
    if (more1.checked) {
        mais1.style.display = 'block'
        veiLac1.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.429)'
    } else {
        mais1.style.display = 'none'
        veiLac1.style.boxShadow = 'none'
    }
})
more2.addEventListener('click', function () {
    let mais2 = document.querySelector('.mais2')
    if (more2.checked) {
        mais2.style.display = 'block'
        veiLac2.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.429)'
    } else {
        mais2.style.display = 'none'
        veiLac2.style.boxShadow = 'none'
    }
})
