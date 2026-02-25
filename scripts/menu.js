const usuario = localStorage.getItem("usuario");
const contenido = document.getElementById("contenido");
const botonConsulta = document.getElementById("botonConsulta");
const botonIngresar = document.getElementById("botonIngresar");
const botonModificar = document.getElementById("botonModificar");

import { cargarClick, cargarModificar } from "./modificarDatos.js";
import { cargarTabla } from "./consultarDatos.js";

async function cargarPagina(pagina) {
  const respuesta = await fetch(pagina);
  const html = await respuesta.text();
  contenido.innerHTML = html;
}

botonConsulta.addEventListener("click", async () => {
  await cargarPagina("verMascotas.html");
  cargarTabla();
});

botonIngresar.addEventListener("click", async () => {
  await cargarPagina("ingresarMascotas.html");
  cargarClick();
});

botonModificar.addEventListener("click", async () => {
  await cargarPagina("modificarMascotas.html");
  cargarModificar();
});

const textoBienvenida = document.getElementById("textoBienvenida");

if (usuario) {
  textoBienvenida.textContent = `Bienvenido: ${usuario}`;
}
