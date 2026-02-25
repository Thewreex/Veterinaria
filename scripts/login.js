const boton = document.getElementById("btnLogin");
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const alertaLogin = document.getElementById("alertaLogin");

export let coincidencia = [];

import { listaVeterinarios } from "./clases.js";

console.log(listaVeterinarios);

if (boton) {
  boton.onclick = function () {
    for (let vet of listaVeterinarios) {
      if (
        vet.nombreUsuario === inputUser.value &&
        vet.contrasena === inputPassword.value
      ) {
        coincidencia = [true, vet.nombreUsuario, vet.id];
      }
    }

    if (coincidencia[0]) {
      localStorage.setItem("usuario", coincidencia[1]);
      localStorage.setItem("id", coincidencia[2]);
      window.location.href = "menu.html";
    } else {
      alertaLogin.classList.remove("d-none");
    }
  };
}
