import { Mascota, listaMascotas } from "./clases.js";
let mascotas = JSON.parse(localStorage.getItem("mascotas"));

export function cargarClick() {
  const btnIngresar = document.getElementById("btnIngresarMascota");
  const inputNombre = document.getElementById("inputNombre");
  const inputTutor = document.getElementById("inputTutor");
  const inputEvMedica = document.getElementById("inputEvMedica");

  if (btnIngresar) {
    btnIngresar.addEventListener("click", () => {
      let nuevaMascota = new Mascota(
        inputNombre.value,
        inputTutor.value,
        inputEvMedica.value,
      );
      localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
      console.log(JSON.parse(localStorage.getItem("mascotas")));
    });
  }
}

export function cargarModificar() {
  const cuerpo = document.getElementById("cuerpoTablaMod");
  const btnEliminar = document.getElementById("btnEliminar");
  let idVet = localStorage.getItem("id");

  for (let mascota of mascotas) {
    if (mascota.idVet == idVet) {
      cuerpo.innerHTML += `
  <tr>
    <th  scope="row">${mascota.id}</th>
    <td id="${mascota.id}NOM">${mascota.nombre}</td>
    <td class="d-flex justify-content-evenly">
      <button type="button" id="${mascota.id}" class="btn btnModificar btn-primary">
        Modificar
      </button>
      <button type="button" id="btnEliminar" class="btn btn-danger">
        Eliminar
      </button>
    </td>
  </tr>
  `;
    }
  }

  const btnModificar = document.querySelectorAll(".btnModificar");

  btnModificar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.id;

      const nuevoNombre = prompt(
        "Ingrese un nuevo nombre, deje vacio para conservar el actual",
      );
      const nuevoTutor = prompt(
        "Ingrese un nuevo Tutor, deje vacio para conservar el actual",
      );
      const nuevoEvMedica = prompt(
        "Ingrese una nueva Evolucion medica, deje vacio para conservar el actual",
      );

      for (let mascota of mascotas) {
        if (mascota.id == id) {
          const nomTabla = document.getElementById(`${id}NOM`);
          mascota.nombre = nuevoNombre || mascota.nombre;
          mascota.tutor = nuevoTutor || mascota.tutor;
          mascota.evolucionMedica = nuevoEvMedica || mascota.evolucionMedica;
          nomTabla.textContent = mascota.nombre;
          break;
        }
      }

      localStorage.setItem("mascotas", JSON.stringify(mascotas));

      console.log(mascotas);
    });
  });
}
