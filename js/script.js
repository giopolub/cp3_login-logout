document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar sua lógica de validação de login.
    // Por enquanto, vamos apenas simular uma verificação simples.
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        // Redirecionar para a página index.html se o login for bem-sucedido
        window.location.href = 'index.html';
    } else {
        // Exibir mensagem de erro se o login falhar
        document.getElementById('error-message').style.display = 'block';
    }
});