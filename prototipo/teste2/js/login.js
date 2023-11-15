const formulario = document.getElementById('loginForm')
formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (email === 'sla@gmail.com' && senha === 'Baiano123') {
        window.location.replace('../index.html');
    } else {
        alert('Usuário ou senha incorretos.');
    }

})
document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
function showCard() {
    document.getElementById('card').style.display = 'flex';
}

function hideCard() {
    document.getElementById('card').style.display = 'none';
}