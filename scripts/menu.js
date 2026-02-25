const usuario = localStorage.getItem("usuario");

const textoBienvenida = document.getElementById("textoBienvenida");

if (usuario) {
  textoBienvenida.textContent = `Bienvenido: ${usuario}`;
}
