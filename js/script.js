if (!localStorage.getItem('userLoggedIn')) {
    localStorage.setItem('userLoggedIn', JSON.stringify({ email: 'usuario@exemplo.com', password: 'senha123' }));
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));

    if (email === userLoggedIn.email && password === userLoggedIn.password) {
        window.location.href = './sucesso.html';
    } else {
        window.location.href = './erro.html';
    }
});