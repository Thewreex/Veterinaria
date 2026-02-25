// Script que nos permitira toda manipulacion de los elementos que hay en la lista de mascotas, desde ingresar, modificar y eliminar datos

import { Mascota, listaMascotas } from "./clases.js";

// funcion cargarClick que se encarga de activar todas las funciones de la pagina de ingresar datos

export function cargarClick() {
  // inicia los componentes del menu de ingresar

  const btnIngresar = document.getElementById("btnIngresarMascota");
  const alertSucess = document.getElementById("alertSucess");
  const alertDanger = document.getElementById("alertDanger");

  if (btnIngresar) {
    // al hacer click al boton de ingresar, verifica que todos los campos tengan sus correspondientes datos, si es asi, crea una nueva mascota con
    // estos datos y actualiza el localStorage
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
        alertSucess.classList.remove("d-none");
        alertDanger.classList.add("d-none");
      } else {
        alertDanger.classList.remove("d-none");
        alertSucess.classList.add("d-none");
      }
    });
  }
}

// funcion cargarClick que se encarga de activar todas las funciones de la pagina de modificar/eliminar datos

export function cargarModificar() {
  // llamada de todos los elementos a usarse , ademas de la id del veterinario
  const inputNombre = document.getElementById("inputNombre");
  const inputTutor = document.getElementById("inputTutor");
  const inputEvMedica = document.getElementById("inputEvMedica");
  const cuerpo = document.getElementById("cuerpoTablaMod");
  const alertMod = document.getElementById("alertMod");
  const btnEliminar = document.getElementById("btnEliminar");
  let idVet = localStorage.getItem("id");

  // funcion que se encarga de ingresar a la tabla todas las mascotas que correspondan al veterinario

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

  // Activacion de las funcionalidades de los botones, se usa forEach para que cada boton modificar obtenga el eventListener

  btnModificar.forEach((boton) => {
    boton.addEventListener("click", () => {
      // al hacer click, primero obtiene la id de la mascota que fue seleccioanda para modificar, que coincide con la id del boton, puesto que al generar los elementos de la tabla
      // a cada boton se le agrego la id de la respectiva mascota que representan, ademas de usar find para encontrar el objeto de la mascota que coincida con la id
      const id = boton.id;
      const mascota = listaMascotas.find((m) => m.id == id);

      // cuando se hace click al boton se abre un modal que tiene vinculado este mismo
      if (mascota) {
        // al abrir el modal, a cada input dentro de este modal se cambia el placeholder a el valor que tiene actualmente la mascota
        inputNombre.placeholder = mascota.nombre;
        inputTutor.placeholder = mascota.tutor;
        inputEvMedica.placeholder = mascota.evolucionMedica;

        // al hacer click en el boton de enviar del modal, se hace el cambio segun el valor de los inputs, si estan vacio entonces conserva los datos que
        //ya tenia, luego de eso, almacena los nuevos datos en el localStorage y muestra una alerta, ademas de modificar la tabla
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

  // agrega las funcionalidades de eliminar a cada boton para que este pueda ejecutar sus funciones
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      // obtiene el valor de la id de la mascota para eliminar, ademas de la fila en la tabla, y el indice del elemento dentro del arreglo que coincide
      // con la id de la mascota a eliminar
      const id = boton.id;
      const tr = document.getElementById(`${id}TR`);
      const index = listaMascotas.findIndex((m) => m.id == id);

      // despliega el modal correspondiente al interactuar con algun boton de eliminar, al interactuar con el boton eliminar que esta dentro del modal
      // se elimina el elemento de la lista que coincida con el indice ya rescatado anteriormente, se borra la fila de la tabla y se guarda la nueva lista
      // en el localStorage
      btnEliminar.onclick = () => {
        listaMascotas.splice(index, 1);
        tr.remove();
        localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
      };
    });
  });
}
