const senha = document.querySelector("#senha");
const confirmarSenha = document.querySelector("#confirmarSenha");
const form = document.querySelector("form");


form.addEventListener("submit", function (event) {
    if (senha.value !== confirmarSenha.value) {
        event.preventDefault();
    };
});