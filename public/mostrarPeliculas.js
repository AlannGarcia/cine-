import { peliculas } from './peliculas.js';

const pelis = document.getElementById("pelis");
const inputBusqueda = document.getElementById("busqueda");
// Obtener la ventana emergente y los elementos de contenido
const modal = document.getElementById("myModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalSynopsis = document.getElementById("modalSynopsis");
const modalTrailer = document.getElementById("modalTrailer");
const modalPlataforma = document.getElementById("modalPlataforma");
const modalPuntuacion = document.getElementById("modalPuntuacion");
const modalCines = document.getElementById("modalCines");

function mostrarListaPeliculas(pelisFiltradas) {
  pelis.innerHTML = "";
  if (pelisFiltradas.length === 0) {
    const p = document.createElement("p");
    p.classList.add('textoSinPelis');
    p.textContent = "No se encontraron películas con estas características";
    pelis.appendChild(p);
    return;
  }
  pelisFiltradas.forEach(pel => {
    const div = document.createElement("div");
    div.classList.add('col-md-2');
    const divCard = document.createElement("div");
    divCard.classList.add('card', 'mb-4', 'shadow-sm');
    const img = document.createElement("img");
    img.classList.add('card-img-top');
    img.style.cursor = "pointer";
    const h2 = document.createElement("h2");
    h2.classList.add('card-title', 'text-center')

    img.src = pel.Poster;
    h2.textContent = pel.Titulo;
    divCard.appendChild(img);
    divCard.appendChild(h2);

    // Agregar estrellas
    const divStars = document.createElement("div");
    divStars.classList.add('stars');
    for (let i = 1; i <= pel.puntuacionMaxima; i++) {
      const star = document.createElement("span");
      star.classList.add('star');
      star.setAttribute('data-value', i);
      star.innerHTML = '&#9734;';

      // Agregar evento de clic solamente a esta estrella
      star.addEventListener("click", () => {
        console.log('se hizo click');
        const value = parseInt(star.getAttribute("data-value"));
        pel.Puntuacion = value;
        star.style.color = "black"; // Pintar la estrella clickeada de negro
      });

      // Agregar evento de hover a la estrella
      star.addEventListener("mouseover", () => {
        const value = parseInt(star.getAttribute("data-value"));
        const stars = divStars.querySelectorAll(".star");
        stars.forEach((star, index) => {
          if (index < value) {
            star.style.color = "black"; // Pintar las estrellas antes de la que se está hovereando de negro
          } else {
            star.style.color = "grey"; // Pintar las estrellas después de la que se está hovereando de gris
          }
        });
      });

      divStars.appendChild(star);
    }
    divCard.appendChild(divStars);

    div.appendChild(divCard);
    pelis.appendChild(div);

    // Agregar el evento de clic a la imagen de la portada
    const portadas = document.querySelectorAll("#pelis img");
    portadas.forEach((portada, index) => {
      portada.addEventListener("click", () => {
        const pelicula = pelisFiltradas[index];

        modalPoster.src = pelicula.Poster;
        modalTitle.innerText = pelicula.Titulo;
        modalSynopsis.innerHTML = "";
        const divSynopsis = document.createElement("div");
        divSynopsis.classList.add('cuadrado');
        divSynopsis.textContent = pelicula.Sinopsis;
        modalSynopsis.appendChild(divSynopsis);

        modalTrailer.src = pelicula.Trailer;

        const divPlataforma = document.createElement("div");
        divPlataforma.classList.add('cuadrado');
        divPlataforma.textContent = pelicula.Plataforma;
        modalPlataforma.innerHTML = '';
        modalPlataforma.appendChild(divPlataforma);

        const divPuntuacion = document.createElement("div");
        divPuntuacion.classList.add('cuadrado');
        divPuntuacion.textContent = pelicula.Puntuacion;
        modalPuntuacion.innerHTML = '';
        modalPuntuacion.appendChild(divPuntuacion);

        const divCines = document.createElement("div");
        divCines.classList.add('cuadrado');
        divCines.textContent = pelicula.CineDondeVerla;
        modalCines.innerHTML = '';
        modalCines.appendChild(divCines);

        // Mostrar la ventana emergente
        modal.style.display = "block";
      });
    });
  });
}

function filtrarPeliculas() {
  const busqueda = inputBusqueda.value.toLowerCase();
  const pelisFiltradas = peliculas.filter(pel => {
    const titulo = pel.Titulo.toLowerCase();
    const genero = pel.Genero.toLowerCase();
    const plataforma = pel.Plataforma.toLowerCase();
    return titulo.includes(busqueda) || genero.includes(busqueda) || plataforma.includes(busqueda);
  });
  mostrarListaPeliculas(pelisFiltradas);
}

inputBusqueda.addEventListener("input", filtrarPeliculas);
mostrarListaPeliculas(peliculas);

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  modal.style.display = "none";
});
