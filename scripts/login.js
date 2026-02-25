// script que nos permite validar el login de los veterinarios

// Inicializacion de todos los elementos usados en el login

const boton = document.getElementById("btnLogin");
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const alertaLogin = document.getElementById("alertaLogin");

// se crea una variable coincidencia donde se almacenara si es el login fue correcto, y si es correcto almacena los datos del veterinario

export let coincidencia = [];

import { listaVeterinarios } from "./clases.js";

if (boton) {
  boton.onclick = function () {
    // al interactuar con el voton de iniciar sessionStorage, analiza cada veterinario ingresado en la lista para ver si los valores ingresados
    // coinciden con algun veterinario, si coinciden, ingresa un true en coincidencia junto a los datos de este veterinario
    for (let vet of listaVeterinarios) {
      if (
        vet.nombreUsuario === inputUser.value &&
        vet.contrasena === inputPassword.value
      ) {
        coincidencia = [true, vet.nombreUsuario, vet.id];
      }
    }

    // en el caso de que los datos coincidan, asigna los datos de este medico al localStorage para darle una bienvenida en el menu, conservar la sesion
    // iniciada al recargar y llevar un control de que veterinario esta usando la pagina, de no ser valido el ingreso muesta el alert
    if (coincidencia[0]) {
      localStorage.setItem("usuario", coincidencia[1]);
      localStorage.setItem("id", coincidencia[2]);
      window.location.href = "menu.html";
    } else {
      alertaLogin.classList.remove("d-none");
    }
  };
}
