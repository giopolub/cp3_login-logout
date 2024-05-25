document.querySelector("#loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputEmail = document.querySelector("#idEmail").value;
    const inputSenha = document.querySelector("#idSenha").value;
    const inputCpf = document.querySelector("#idCpf").value;

    const validEmail = "teste@teste.com";
    const validSenha = "1234abcd";
    const validCpf = "123.456.789-00";

    if (inputEmail === validEmail && inputSenha === validSenha && inputCpf === validCpf) {
        localStorage.setItem("userLoggedIn", JSON.stringify({
            email: inputEmail,
            senha: inputSenha,
            cpf: inputCpf
        }));
        window.location.href = "./sucesso.html";
    } else {
        document.querySelector("#error-message").style.display = "block";
    }
});

function logout() {
    const mensagemlogout = document.createElement('p');
    mensagemlogout.textContent = 'Aguarde enquanto o logout é realizado, a seguir você será redirecionado à página de login...';
    document.body.appendChild(mensagemlogout);

    setTimeout(() => {
        localStorage.removeItem('userLoggedIn');
        window.location.href = '../login.html';
    }, 5000);
}