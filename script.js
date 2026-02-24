const boton = document.getElementById("btnLogin");

boton.onclick = function () {
  window.location.href = "ingresarMascota.html";
};

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

const carleto = new Veterinario("Carleto", "123123");

console.log(listaVeterinarios);
