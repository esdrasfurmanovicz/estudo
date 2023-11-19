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
/* Navegar até tal parte da pagina */
function navigateToDestination(destino) {
    let i = document.querySelector(destino)
    i.scrollIntoView({ behavior: "smooth" });
}
/* Notificações */
let checkNoti = document.querySelector('#checknoti')
checkNoti.addEventListener('click', function () {
    let avBlock = document.querySelector('.avBlock')
    console.log(avBlock)
    if (checkNoti.checked) {
        avBlock.style.display = 'block'
    } else {
        avBlock.style.display = 'none'
    }
})

/* Burger menu */

let burger = document.querySelector('#burger')
burger.addEventListener('click', function () {
    let opc = document.querySelector('.opc')
    if (burger.checked) {
        opc.style.display = 'flex'
    } else {
        opc.style.display = 'none'
    }
})

/*  Pesquisar placa veiculo  */
const pesqu = document.getElementById('form')
pesqu.addEventListener("submit", function (event) {
    event.preventDefault()
    let placa = document.getElementById('placa').value
    let user = document.querySelector('.bra2e19')
    let flecha = document.querySelector('.flecha')
    if (placa === 'BRA2E19' || placa === 'bra2e19') {
        user.style.display = 'block'
        flecha.style.display = 'block'
    } else {
        alert('Placa inválida!')
    }
})
/* hover pulse */
document.querySelectorAll('#pulse').forEach(function (btn) {
    btn.addEventListener('mouseover', function () {
        var tooltip = document.querySelector('.pulseInfo');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    btn.addEventListener('mouseout', function () {
        var tooltip = document.querySelector('.pulseInfo');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});

/*  Mais informações - veiculos adicionados  */
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

/* apagar veiculo add */
function apagar(veic) {
    let v = document.querySelector(veic)
    let confbox = document.querySelector('#confbox')
    confbox.style.display = 'flex'
    let confirmar = document.querySelector('#confirmar')
    let cancelar = document.querySelector('#cancel')
    confirmar.addEventListener('click', function () {
        confbox.style.display = 'none'
        v.style.display = 'none'
        if (veiLac1.style.display == 'none' && veiLac2.style.display == 'none') {
            let dilma = document.querySelector('#dilma')
            dilma.style.display = 'flex'
            dilma.innerHTML = 'Você não possui veiculos adicionados'
        }
        else {
            console.log('Nós vamos estocar vento')
        }
    })
    cancelar.addEventListener('click', function () {
        confbox.style.display = 'none'

    })
}

/* Carrossel */
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });

        items[currentItem].classList.add("current-item");
    });
});

