import { Mascota, listaMascotas } from "./clases.js";

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
  let idVet = localStorage.getItem("id");

  for (let mascota of listaMascotas) {
    if (mascota.idVet == idVet) {
      cuerpo.innerHTML += `
  <tr id=${mascota.id}TR>
    <th scope="row">${mascota.id}</th>
    <td id="${mascota.id}NOM">${mascota.nombre}</td>
    <td class="d-flex justify-content-evenly">
      <button type="button" id="${mascota.id}" class="btn btnModificar btn-primary">
        Modificar
      </button>
      <button type="button" id="${mascota.id}" class="btn btn-danger btnEliminar">
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

      for (let mascota of listaMascotas) {
        if (mascota.id == id) {
          const nomTabla = document.getElementById(`${id}NOM`);
          mascota.nombre = nuevoNombre || mascota.nombre;
          mascota.tutor = nuevoTutor || mascota.tutor;
          mascota.evolucionMedica = nuevoEvMedica || mascota.evolucionMedica;
          nomTabla.textContent = mascota.nombre;
          break;
        }
      }

      localStorage.setItem("mascotas", JSON.stringify(listaMascotas));

      console.log(listaMascotas);
    });
  });

  const btnEliminar = document.querySelectorAll(".btnEliminar");

  btnEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.id;
      const tr = document.getElementById(`${id}TR`);
      console.log(listaMascotas);

      const index = listaMascotas.findIndex((m) => m.id == id);
      if (index !== -1) {
        const mascota = listaMascotas[index];
        const eleccion = +prompt(
          `¿Estas seguro que desea eliminar la consulta de: ${mascota.nombre}?, Ingresa 1 para aceptar, ingresa cualquier otra cosa para cancelar `,
        );

        if (eleccion === 1) {
          listaMascotas.splice(index, 1);
          console.log(listaMascotas);
          tr.remove();
        }
      }
      localStorage.setItem("mascotas", JSON.stringify(listaMascotas));

      console.log(listaMascotas);
    });
  });
}
