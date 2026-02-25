import { Mascota, listaMascotas } from "./clases.js";

export function cargarClick() {
  const btnIngresar = document.getElementById("btnIngresarMascota");
  const inputNombre = document.getElementById("inputNombre");
  const inputTutor = document.getElementById("inputTutor");
  const inputEvMedica = document.getElementById("inputEvMedica");

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
