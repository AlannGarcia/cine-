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