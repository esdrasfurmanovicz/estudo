const formulario = document.getElementById('loginForm')
        formulario.addEventListener('submit', function (event) {
            event.preventDefault()
            let cpf = document.getElementById('cpf').value;
            let placa = document.getElementById('placa').value;

            if (cpf === '077.329.589-50' && placa === 'BRA2E19') {
                window.location.replace('home.html');
            } else {
                alert('Usuário ou senha incorretos.');
            }

        })