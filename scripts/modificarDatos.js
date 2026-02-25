import { Mascota, listaMascotas } from "./clases.js";

export function cargarClick() {
  const btnIngresar = document.getElementById("btnIngresarMascota");
  const alertSucess = document.getElementById("alertSucess");
  const alertDanger = document.getElementById("alertDanger");

  if (btnIngresar) {
    btnIngresar.addEventListener("click", () => {
      if (
        inputNombre.value !== "" &&
        inputTutor.value !== "" &&
        inputEvMedica.value !== ""
      ) {
        let nuevaMascota = new Mascota(
          inputNombre.value,
          inputTutor.value,
          inputEvMedica.value,
        );
        localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
        console.log(JSON.parse(localStorage.getItem("mascotas")));
        alertSucess.classList.remove("d-none");
      } else {
        alertDanger.classList.remove("d-none");
      }
    });
  }
}

export function cargarModificar() {
  const inputNombre = document.getElementById("inputNombre");
  const inputTutor = document.getElementById("inputTutor");
  const inputEvMedica = document.getElementById("inputEvMedica");
  const cuerpo = document.getElementById("cuerpoTablaMod");
  const alertMod = document.getElementById("alertMod");
  const btnEliminar = document.getElementById("btnEliminar");
  let idVet = localStorage.getItem("id");

  for (let mascota of listaMascotas) {
    if (mascota.idVet == idVet) {
      cuerpo.innerHTML += `
  <tr id=${mascota.id}TR>
    <th scope="row">${mascota.id}</th>
    <td id="${mascota.id}NOM">${mascota.nombre}</td>
    <td class="d-flex justify-content-evenly">
      <button type="button" id="${mascota.id}" class="btn btnModificar btn-primary" data-bs-toggle="modal" data-bs-target="#ModalModificar">
        Modificar
      </button>
      <button type="button" id="${mascota.id}" class="btn btn-danger btnEliminar" data-bs-toggle="modal" data-bs-target="#ModalEliminar">
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
      const mascota = listaMascotas.find((m) => m.id == id);

      if (mascota) {
        inputNombre.placeholder = mascota.nombre;
        inputTutor.placeholder = mascota.tutor;
        inputEvMedica.placeholder = mascota.evolucionMedica;

        btnEnviar.onclick = () => {
          const nomTabla = document.getElementById(`${id}NOM`);
          mascota.nombre = inputNombre.value || mascota.nombre;
          mascota.tutor = inputTutor.value || mascota.tutor;
          mascota.evolucionMedica =
            inputEvMedica.value || mascota.evolucionMedica;
          nomTabla.textContent = mascota.nombre;
          localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
          alertMod.classList.remove("d-none");
        };
      }
    });
  });

  const botonesEliminar = document.querySelectorAll(".btnEliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.id;
      const tr = document.getElementById(`${id}TR`);
      const index = listaMascotas.findIndex((m) => m.id == id);

      btnEliminar.onclick = () => {
        listaMascotas.splice(index, 1);
        tr.remove();
        localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
      };
    });
  });
}
