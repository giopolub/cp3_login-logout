document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        window.location.href = '../index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});