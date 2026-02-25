const boton = document.getElementById("btnLogin");
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const alertaLogin = document.getElementById("alertaLogin");

const listaVeterinarios = [];

export class Veterinario {
  constructor(nombreUsuario, contrasena) {
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    listaVeterinarios.push({
      nombreUsuario: this.nombreUsuario,
      contrasena: this.contrasena,
    });
  }
}

export let coincidencia = [];

boton.onclick = function () {
  for (let vet of listaVeterinarios) {
    if (
      vet.nombreUsuario === inputUser.value &&
      vet.contrasena === inputPassword.value
    ) {
      coincidencia = [true, vet];
    }
  }

  if (coincidencia[0]) {
    localStorage.setItem("usuario", coincidencia[1].nombreUsuario);
    window.location.href = "menu.html";
  } else {
    alertaLogin.classList.remove("d-none");
  }
};

console.log(listaVeterinarios);
