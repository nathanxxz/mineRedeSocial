document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".form");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document
            .getElementById("nome")
            .value.trim();
        const email = document
            .getElementById("email")
            .value.trim();
        const senha = document
            .getElementById("password")
            .value.trim();

        const cadastro = {
            email,
            senha
        }

        if (!nome || !email || !senha) {
            alert("Por favor, preencha todos os campos");
            return;
        }

        if (senha.length < 8) {
            alert("A senha é muito pequena, precisa de pelo menos 5 caracteres");
            return;
        }

        const meuObjetoString = JSON.stringify(cadastro);

        localStorage.setItem("cadastro", meuObjetoString);

        alert("Cadastro realizado com sucesso");

        setTimeout(function () {
            window.location.replace("../login/index.html");
        }, 1000);
    });
});