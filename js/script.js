document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputEmail = document.querySelector("#idEmail").value;
            const inputSenha = document.querySelector("#idSenha").value;
            const inputCpf = document.querySelector("#idCpf").value;

            const validUsers = [
                { email: "joaosilva@fiap.com", senha: "fiap123", cpf: "123.456.789-00", nome: "João da Silva" },
                { email: "alexandrejesus@fiap.com", senha: "senha123", cpf: "111.222.333-44", nome: "Alexandre Jesus" }
            ];

            const validUser = validUsers.find(user => user.email === inputEmail && user.senha === inputSenha && user.cpf === inputCpf);

            if (validUser) {
                localStorage.setItem("userLoggedIn", JSON.stringify(validUser));
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
            userNameElement.textContent = userLoggedIn.nome;
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