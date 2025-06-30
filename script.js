const imagenes = [
  { src: "Imagenes/goat1.png", descuento: false },
  { src: "Imagenes/goat2.png", descuento: false },
  { src: "Imagenes/goat7.png", descuento: false },
  { src: "Imagenes/goat6.png", descuento: false },
  { src: "Imagenes/goat8.png", descuento: false },
  { src: "Imagenes/goat9.png", descuento: false },
  { src: "Imagenes/Slider1.png", descuento: true },
  { src: "Imagenes/slider2.png", descuento: true },
  { src: "Imagenes/slider3.png", descuento: true }
];

let indice = 0;

const img = document.getElementById("slider-img");
const etiqueta = document.getElementById("etiqueta-descuento");

function mostrarImagen(i) {
  img.src = imagenes[i].src;
  etiqueta.style.display = imagenes[i].descuento ? "block" : "none";
}

document.getElementById("prevBtn").addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
});

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te contactaremos pronto.");
});

mostrarImagen(indice);
