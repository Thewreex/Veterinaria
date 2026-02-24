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

boton.onclick = function () {
  let coincidencia = [];
  for (let vet of listaVeterinarios) {
    if (
      vet.nombreUsuario === inputUser.value &&
      vet.contrasena === inputPassword.value
    ) {
      coincidencia = [true, vet];
    }
  }

  console.log(coincidencia);

  if (coincidencia[0]) {
    window.location.href = "menu.html";
  } else {
    alertaLogin.classList.remove("d-none");
  }
};

console.log(listaVeterinarios);
