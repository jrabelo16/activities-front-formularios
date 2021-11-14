const genero = document.querySelector("select");
const musica = document.querySelector("input");

genero.addEventListener("change", function (event) {
    console.log(event.target.value);
    musica.value = genero.value;
});