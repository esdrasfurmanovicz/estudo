/*
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
*/
/* add carro */
const pesqu = document.getElementById('form')
pesqu.addEventListener("submit", function (event) {
    event.preventDefault()
    let placa = document.getElementById('placa').value
    let user = document.querySelector('.info')
    let pingo = document.querySelector('#pingo')
    if (placa === 'BRA2E19' || placa === 'bra2e19') {
        user.style.display = 'block'
        pingo.style.display = 'block'
    } else{
        alert('Placa inválida!')
    }
})
/* Navegar até tal parte da pagina */
function navigateToDestination(destino) {
    let i = document.querySelector(destino)
    i.scrollIntoView({behavior: "smooth"});
}


