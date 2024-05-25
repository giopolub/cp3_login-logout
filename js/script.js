document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputEmail = document.querySelector("#idEmail").value;
            const inputSenha = document.querySelector("#idSenha").value;
            const inputCpf = document.querySelector("#idCpf").value;

            const validEmail = "joaosilva@fiap.com";
            const validSenha = "fiap123";
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
    }

    if (userLoggedIn) {
        const userEmailElement = document.getElementById("user-email");
        const userNameElement = document.getElementById("user-name");

        if (userEmailElement && userNameElement) {
            userEmailElement.textContent = userLoggedIn.email;
            userNameElement.textContent = "João da Silva";
        }

        const btnLogout = document.getElementById("btnLogout");
        if (btnLogout) {
            btnLogout.addEventListener("click", function() {
                localStorage.removeItem('userLoggedIn');
                window.location.href = './logout.html';        
            });
        }
    } else if (document.body.contains(document.getElementById("btnLogout"))) {
        window.location.href = "./login.html";
    }
});