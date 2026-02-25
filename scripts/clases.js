// Este script almacena las clases de veterinario y mascota para ser usado en los otros scripts segun se estime conveniente

// llamada de los elementos necesarios para trabajar
export const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
export const listaVeterinarios = [];

// obtiene del localStorage el veterinario que tiene la sesion iniciada
const id = localStorage.getItem("id");

// clase veterinario con el que se puede inicializar un veterinario
export class Veterinario {
  constructor(nombreUsuario, contrasena) {
    this.id = listaVeterinarios.length + 1;
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    // push usado para llevar al veterinario recien creado a la lista de veterinarios
    listaVeterinarios.push({
      id: this.id,
      nombreUsuario: this.nombreUsuario,
      contrasena: this.contrasena,
    });
  }
}

// Clase Mascota

export class Mascota {
  constructor(nombre, tutor, evolucionMedica) {
    // Inicia las variables que necesitan ser iniciadas con el New
    this.nombre = nombre;
    this.tutor = tutor;
    this.evolucionMedica = evolucionMedica;

    // funcion que nos permite asignarle una id a la mascota recien creada, si una mascota es eliminada,
    // la id que se asigne a la proxima mascota en crearse reemplazara la id de la mascota eliminada

    // sort que nos permite ordenar de menor a mayor las id para impedir inconvenientes y que se muestren ordenadas al consultar

    listaMascotas.sort((a, b) => a.id - b.id);

    let nuevaId = listaMascotas.length + 1;

    // ciclo que consulta la id de cada mascota para buscar si es que falta alguna, para asignarsela a la nueva mascota a ingresar

    for (let i = 1; i <= listaMascotas.length; i++) {
      if (listaMascotas[i - 1].id !== i) {
        nuevaId = i;
        break;
      }
    }

    // luego se envia toda esta informacion al arreglo de lista de listaMascotas, implementando la id del veterinario que hizo el ingreso

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
