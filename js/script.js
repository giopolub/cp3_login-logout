document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
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
                window.location.href = "../sucesso.html";
            } else {
                document.querySelector("#error-message").style.display = "block";
            }
        });
    }

    if (userLoggedIn) {
        const userEmailElement = document.getElementById("user-email");
        const userNameElement = document.getElementById("username");

        if (userEmailElement && userNameElement) {
            userEmailElement.textContent = userLoggedIn.email;
            userNameElement.textContent = userLoggedIn.email.split('@')[0];
        }

        const btnLogout = document.getElementById("btnLogout");
        if (btnLogout) {
            btnLogout.addEventListener("click", function() {
                window.location.href = "../logout.html";
            });
        }
    } else if (document.body.contains(document.getElementById("btnLogout"))) {
        window.location.href = "../login.html";
    }
});