document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const email = formulario.querySelector('input[name="email"]').value.trim();
        const senha = formulario.querySelector('input[name="password"]').value.trim();

        if (!email || !senha) {
            alert("Voce nao pode deixar os campos em branco");
            return;
        }

        if (senha.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres");
            return;
        }

        const usuarioJSON = localStorage.getItem("cadastro");

        if (!usuarioJSON) {
            alert("Nenhum usuário cadastrado");
            return;
        }

        const usuario = JSON.parse(usuarioJSON);

        if (usuario.email === email && usuario.senha === senha) {
            alert("Login realizado com sucesso");
            setTimeout(function () {
                window.location.href = "../Home/home.html";
            }, 1000);
        } else {
            alert("Usuário ou senha incorretos");
        }
    });
});
