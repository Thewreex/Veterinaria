export function cargarTabla() {
  let mascotas = JSON.parse(localStorage.getItem("mascotas"));
  const cuerpo = document.getElementById("cuerpoTabla");
  let nombreVet = localStorage.getItem("usuario");
  let idVet = localStorage.getItem("id");

  for (let mascota of mascotas) {
    if (mascota.idVet == idVet) {
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
