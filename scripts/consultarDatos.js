// Funcion que nos permite cargar todos los datos en la tabla del verMascotas.html

export function cargarTabla() {
  // Obtiene todos los datos de las mascotas almacenadas en el localStorage y el veterinario que realiza esta consulta
  let mascotas = JSON.parse(localStorage.getItem("mascotas"));
  const cuerpo = document.getElementById("cuerpoTabla");
  let nombreVet = localStorage.getItem("usuario");
  let idVet = localStorage.getItem("id");

  // lo que nos permite este for es iterar por cada mascota para revisar si el veterinario que realizo el ingreso coincide con el veterinario con la sesion iniciada
  for (let mascota of mascotas) {
    if (mascota.idVet == idVet) {
      // en el caso de encontrar una mascota que coincide con el Veterinario, la inserta en la tabla
      cuerpo.innerHTML += `
    <tr>
      <th scope="row">${mascota.id}</th>
      <td>${mascota.nombre}</td>
      <td>${mascota.tutor}</td>
      <td>${mascota.evolucionMedica}</td>
      <td>${nombreVet}</td>
    </tr>
  `;
    }
  }
}
