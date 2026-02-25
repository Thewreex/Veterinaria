export const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
export const listaVeterinarios = [];
const id = localStorage.getItem("id");

export class Veterinario {
  constructor(nombreUsuario, contrasena) {
    this.id = listaVeterinarios.length + 1;
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    listaVeterinarios.push({
      id: this.id,
      nombreUsuario: this.nombreUsuario,
      contrasena: this.contrasena,
    });
  }
}

export class Mascota {
  constructor(nombre, tutor, evolucionMedica) {
    this.nombre = nombre;
    this.tutor = tutor;
    this.evolucionMedica = evolucionMedica;

    listaMascotas.sort((a, b) => a.id - b.id);

    let nuevaId = listaMascotas.length + 1;

    for (let i = 1; i <= listaMascotas.length; i++) {
      if (listaMascotas[i - 1].id !== i) {
        nuevaId = i;
        break;
      }
    }

    listaMascotas.push({
      id: nuevaId,
      nombre: this.nombre,
      tutor: this.tutor,
      evolucionMedica: this.evolucionMedica,
      idVet: id,
    });

    listaMascotas.sort((a, b) => a.id - b.id);
  }
}
