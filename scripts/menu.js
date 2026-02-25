// script que nos permite ir cambiando entre paginas html conservando siempre el navbar

// se obtiene el valor del veterinario que esta usando la pagina y los elementos de este menu
const usuario = localStorage.getItem("usuario");
const contenido = document.getElementById("contenido");
const botonConsulta = document.getElementById("botonConsulta");
const botonIngresar = document.getElementById("botonIngresar");
const botonModificar = document.getElementById("botonModificar");

// se obtienen las funciones que hacen ejecutar las funcionalidades de los diferentes elementos dentro de la pagina

import { cargarClick, cargarModificar } from "./modificarDatos.js";
import { cargarTabla } from "./consultarDatos.js";

// funcion asincronica que nos permite esperar a recibir la informacion de las paginas a mostrar antes de insertarlas dentro del menu
async function cargarPagina(pagina) {
  const respuesta = await fetch(pagina);
  const html = await respuesta.text();
  contenido.innerHTML = html;
}

// Dato importante: al estar insetando todo el html usando innerHtml, estos html insertados no pueden tener etiquetas script por temas de seguridad
// Por ende se insertan los script en el main

// se usa una funcion event listener asincrona, para esperar que primero se carge la pagina antes de activar el script que hace que funcione la pagina
//esto es importante puesto que estas funciones necesitan de los elementos que hay dentro de estos html, asi que si se llegaran a ejecutar
// las funciones sin tener los elementos cargados, se produciran errores
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

// if que nos permite dar la bienvenida en el header con el nombre del veterinario que ingreso

const textoBienvenida = document.getElementById("textoBienvenida");

if (usuario) {
  textoBienvenida.textContent = `Bienvenido: ${usuario}`;
}
