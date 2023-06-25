// En pantallaCines.js
window.addEventListener('DOMContentLoaded', function() {
    let scriptElement = document.querySelector('script[src$="/pantallaCines.js"]');
    let listaCines = JSON.parse(scriptElement.getAttribute('data-lista-cines'));
  
    let cinesContainer = document.getElementById('cines-container');
  
    // Agregar los cines a la lista seleccionable
    listaCines.forEach(function(cine) {
      let cineElement = document.createElement('a');
      cineElement.classList.add('list-group-item', 'list-group-item-action');
      cineElement.textContent = cine.nombre;
      cineElement.addEventListener('click', function() {
        mostrarDetallesCine(cine);
      });
      cinesContainer.appendChild(cineElement);
    });
  
    function mostrarDetallesCine(cine) {
      let peliculasElemento = document.getElementById('peliculas');
      let combosElemento = document.getElementById('combos');
    
      // Limpiar los elementos existentes
      peliculasElemento.innerHTML = '';
      combosElemento.innerHTML = '';
    
      // Mostrar las películas del cine seleccionado
      cine.peliculas.forEach(function(pelicula) {
        let peliculaElemento = document.createElement('div');
        peliculaElemento.classList.add('cuadrado');
        peliculaElemento.textContent = pelicula;
        peliculasElemento.appendChild(peliculaElemento);
      });
    
      // Mostrar los combos del cine seleccionado
      cine.combos.forEach(function(combo) {
        let comboElemento = document.createElement('div');
        comboElemento.classList.add('cuadrado');
        comboElemento.textContent = combo;
        combosElemento.appendChild(comboElemento);
      });
    }
    
  });
  