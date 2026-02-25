const usuario = localStorage.getItem("usuario");
const contenido = document.getElementById("contenido");
const botonConsulta = document.getElementById("botonConsulta");
const botonIngresar = document.getElementById("botonIngresar");
const botonModificar = document.getElementById("botonModificar");

async function cargarPagina(pagina) {
  const respuesta = await fetch(pagina);
  const html = await respuesta.text();
  contenido.innerHTML = html;
}

botonConsulta.addEventListener("click", () => {
  cargarPagina("verMascotas.html");
});

botonIngresar.addEventListener("click", () => {
  cargarPagina("ingresarMascotas.html");
});

botonModificar.addEventListener("click", () => {
  cargarPagina("modificarMascotas.html");
});

const textoBienvenida = document.getElementById("textoBienvenida");

if (usuario) {
  textoBienvenida.textContent = `Bienvenido: ${usuario}`;
}
