import {peliculas} from './peliculas.js';

const pelis = document.getElementById("pelis");
function mostrarListaPeliculas() {
    peliculas.forEach(pel => {
        const div = document.createElement("div");
        div.classList.add('col-md-2');
       const divCard = document.createElement("div");
        divCard.classList.add('card', 'mb-4', 'shadow', 'bg-transparent');
        const img = document.createElement("img");
        img.classList.add('card-img-top');
        const h2 = document.createElement("h2");
        h2.classList.add('card-title')
        img.src = pel.Poster;
        h2.textContent = pel.Titulo;
        divCard.appendChild(img);
        divCard.appendChild(h2);
        div.appendChild(divCard);
        pelis.appendChild(div);})
}

mostrarListaPeliculas()


// Obtener la ventana emergente y los elementos de contenido
const modal = document.getElementById("myModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalSynopsis = document.getElementById("modalSynopsis");

// Obtener todas las imágenes de portada y agregar un evento de clic
const portadas = document.querySelectorAll("#pelis img");
portadas.forEach((portada, index) => {
  portada.addEventListener("click", () => {
    // Obtener la información de la película correspondiente
    const pelicula = peliculas[index];
    
    // Actualizar el contenido de la ventana emergente
    modalPoster.src = pelicula.Poster;
    modalTitle.innerText = pelicula.Titulo;
    modalSynopsis.innerText = pelicula.Sinopsis;
    
    // Mostrar la ventana emergente
    modal.style.display = "block";
  });
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  modal.style.display = "none";
});










// const imagenes = document.querySelectorAll("#pelis img");
// imagenes.forEach(img => {
//   img.addEventListener("click", mostrarInformacion(img));
// });


// function mostrarInformacion(evento,img) {
//     //const peli = peliculas.find(p => p.Poster == img);
//     const peli = evento.target.dataset;
//     console.log(peli);
//     const titulo = document.getElementById("titulo");
//     const sinopsis = document.getElementById("sinopsis");
//     const trailer = document.getElementById("trailer");
//     const puntuacion = document.getElementById("puntuacion");
  
//     //titulo.textContent = peli.Poster;
//     //sinopsis.textContent = peli.Sinopsis;
//     //trailer.textContent = peli.Trailer;
//     //puntuacion.textContent = peli.Puntuacion;
  
//     const modal = document.getElementById("modal");
//     modal.style.display = "block";
//   }
  