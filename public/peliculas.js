const peliculas = [ 
    {
      Poster: "https://www.themoviedb.org/t/p/original/5nCjsUqjIAY4sqBxmTtYvSaiqXV.jpg",
      Titulo: "El irlandés",
      Sinopsis: "Un hombre que dedicó su vida a la mafia reflexiona sobre su carrera y la familia que destruyó mientras se encuentra en un asilo de ancianos.",
      Trailer: "https://www.youtube.com/embed/WHXxVmeGQUc",
      Puntuacion: [],
      CineDondeVerla: ['Cine Hoyts', 'Showcase Cinemas'],
      Genero: "Crimen, Drama, Historia",
      Plataforma: "Netflix",
      puntuacionMaxima: 5
    },
    {
      Poster: "https://www.themoviedb.org/t/p/original/tp0u1s5zdIF52HW96hp1uAMtnGr.jpg",
      Titulo: "Mank",
      Sinopsis: "En la década de 1930, el guionista Herman J. Mankiewicz lucha por completar el guion de Ciudadano Kane para Orson Welles.",
      Trailer: "https://www.youtube.com/embed/aSfX-nrg-lI",
      Puntuacion: [],
      CineDondeVerla: ['Cine Hoyts','Cine ideal'],
      Genero: "Drama, Historia",
      Plataforma: "Netflix",
      puntuacionMaxima: 5
    },
    {
      Poster: "https://www.themoviedb.org/t/p/original/kovE2ZReOuyfgJyQKsbCXvhc0VN.jpg",
      Titulo: "El Gran Hotel Budapest",
      Sinopsis: "Un portero de un famoso hotel europeo entabla amistad con un joven empleado y juntos se ven envueltos en una trama de robo y asesinato.",
      Trailer: "https://www.youtube.com/embed/zru-1DbbcsA",
      Puntuacion: [],
      CineDondeVerla: ['Cine ideal','Abasto Cine','Cine Hoyts'],
      Genero: "Comedia, Drama",
      Plataforma: "Prime Video",
      puntuacionMaxima: 5
    },
    {
      Poster: "https://www.themoviedb.org/t/p/original/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
      Titulo: "La forma del agua",
      Sinopsis: "En plena Guerra Fría, una solitaria limpiadora de un laboratorio se enamora de una criatura anfibia que está siendo objeto de experimentos secretos.",
      Trailer: "https://www.youtube.com/embed/ITqLYivTuh4",
      Puntuacion: [],
      CineDondeVerla: ['Cine Hoyts'],
      Genero: "Aventura, Drama, Fantasía",
      Plataforma: "Netflix",
      puntuacionMaxima: 5
    },
    {
        Poster: "https://www.themoviedb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        Titulo: "Spider-Man: Sin camino a casa",
        Sinopsis: "Después de que Peter Parker haya sido expuesto como Spider-Man, él y sus amigos deben lidiar con las consecuencias mientras intentan buscar ayuda para deshacer el caos.",
        Trailer: "https://www.youtube.com/embed/6QkTCmhOzuA",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Acción, Aventura, Ciencia Ficción",
        Plataforma: "Cines",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/pMTMSKBEe5sMg1ZxWCy9YWLuyln.jpg",
        Titulo: "The French Dispatch",
        Sinopsis: "Una carta de amor a los periodistas ambientada en una redacción de un periódico americano en una ciudad francesa del siglo XX.",
        Trailer: "https://www.youtube.com/embed/TcPk2p0Zaw4",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas', 'Cine Hoyts'],
        Genero: "Comedia, Drama, Romance",
        Plataforma: "Cines",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        Titulo: "Dune",
        Sinopsis: "El hijo de una familia noble se adentra en un peligroso planeta desértico para proteger a su pueblo.",
        Trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts','Showcase Cinemas'],
        Genero: "Acción, Aventura, Drama",
        Plataforma: "HBO Max",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
        Titulo: "El Rey de Zamunda 2",
        Sinopsis: "El rey Jaffe Joffer (James Earl Jones) de Zamunda descubre que tiene un hijo perdido en Estados Unidos y decide buscarlo para prepararlo como su heredero.",
        Trailer: "https://www.youtube.com/embed/sY8gUtyeAKE",
        Puntuacion: [],
        CineDondeVerla: ['No se encuentra disponible en cines actualmente'],
        Genero: "Comedia",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        Titulo: "Avengers: Infinity War",
        Sinopsis: "Los Vengadores y sus aliados deben estar dispuestos a sacrificar todo en un intento de derrotar al poderoso Thanos antes de que su campaña de devastación y ruina ponga fin al universo.",
        Trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Acción, Aventura, Ciencia ficción",
        Plataforma: "Disney+",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/mZuAPY4ETMQPHhCXIcJ90kd6RaS.jpg",
        Titulo: "Joker",
        Sinopsis: "Un hombre despreciado por la sociedad se convierte en el Joker, un peligroso criminal que desata el caos y la violencia en Gotham.",
        Trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Crimen, Drama, Suspense",
        Plataforma: "HBO Max",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
        Titulo: "El Padrino",
        Sinopsis: "La familia Corleone, una de las más importantes de Nueva York, se ve envuelta en una guerra entre bandas rivales mientras intenta mantener su negocio de forma legal.",
        Trailer: "https://www.youtube.com/embed/iOyQx7MXaz0",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Crimen, Drama",
        Plataforma: "Netflix",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        Titulo: "La La Land",
        Sinopsis: "Una aspirante a actriz y un pianista de jazz se enamoran mientras intentan triunfar en sus respectivas carreras en la ciudad de Los Ángeles.",
        Trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts','Showcase Cinemas'],
        Genero: "Comedia, Drama, Música",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
        Titulo: "El Conjuro 3: El Diablo me Obligó a Hacerlo",
        Sinopsis: "Lorraine y Ed Warren, quienes, en una de sus investigaciones paranormales más aterradoras, viajan al norte de Londres para ayudar a una madre soltera que vive con sus cuatro hijos en una casa plagada de espíritus malévolos.",
        Trailer: "https://www.youtube.com/embed/6lVpcalyQ9Y",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts'],
        Genero: "Terror",
        Plataforma: "HBO Max",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg",
        Titulo: "Shang-Chi y la Leyenda de los Diez Anillos",
        Sinopsis: "Shang-Chi debe enfrentarse al pasado que pensó que había dejado atrás cuando se ve envuelto en la red de la misteriosa organización de los Diez Anillos.",
        Trailer: "https://www.youtube.com/embed/8YjFbMbfXaQ",
        Puntuacion: [],
        CineDondeVerla: ['No se encuentra disponible en cines actualmente'],
        Genero: "Acción",
        Plataforma: "Disney+",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
        Titulo: "Cruella",
        Sinopsis: "En la década de 1970, una joven diseñadora de moda llamada Estella de Vil se hace amiga de un par de ladrones que aprecian su deseo de ser famosa. Pero cuando la oportunidad de diseño llega a su manera, ella lucha entre su vida de sueño y el precio que debe pagar por la fama.",
        Trailer: "https://www.youtube.com/embed/gmRKv7n2If8",
        Puntuacion: [],
        CineDondeVerla: ['No se encuentra disponible en cines actualmente'],
        Genero: "Comedia",
        Plataforma: "Disney+",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        Titulo: "La Guerra del Mañana",
        Sinopsis: "El mundo se sorprende cuando un grupo de viajeros en el tiempo llega desde el año 2051 para entregar un mensaje urgente: treinta años en el futuro, la humanidad está perdiendo una guerra global contra una especie alienígena letal. La única esperanza de derrotarlos es hacer que las personas del presente se unan a la lucha.",
        Trailer: "https://www.youtube.com/embed/z6KYwArXjdo",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts'],
        Genero: "Ciencia Ficción",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        Titulo: "Coco",
        Sinopsis: "Miguel es un aspirante a músico y descendiente de una familia de zapateros, pero su familia ha prohibido la música durante generaciones. Sin embargo, él sueña con convertirse en músico. Al entrar en la Tierra de los Muertos, Miguel se encuentra con sus antepasados ​​y busca a su ídolo de la música Ernesto de la Cruz para devolverlo a casa.",
        Trailer: "https://www.youtube.com/embed/xlnPHQ3TLX8",
        Puntuacion: [],
        CineDondeVerla: ['No se encuentra disponible en cines actualmente'],
        Genero: "Animación, Aventura, Familia",
        Plataforma: "Disney+",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
        Titulo: "Jurassic Park",
        Sinopsis: "Un multimillonario diseña un parque temático donde conviven diversas especies de dinosaurios clonados a partir de la sangre extraída de insectos prehistóricos. Sin embargo, las cosas se complican cuando un grupo de visitantes se queda atrapado en el parque durante un corte de energía.",
        Trailer: "https://www.youtube.com/embed/lc0UehYemQA",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts'],
        Genero: "Ciencia ficción, Aventura",
        Plataforma: "HBO Max",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        Titulo: "El Señor de los Anillos: La Comunidad del Anillo",
        Sinopsis: "La película sigue a un grupo de personajes que buscan destruir un anillo mágico en un viaje épico a través de la Tierra Media.",
        Trailer: "https://www.youtube.com/embed/Pki6jbSbXIY",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Fantasía, Aventura",
        Plataforma: "Netflix",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        Titulo: "Forrest Gump",
        Sinopsis: "La película cuenta la historia de Forrest Gump, un hombre con discapacidad intelectual que vive una vida increíblemente aventurera y llena de acontecimientos, y que accidentalmente se convierte en una figura histórica en la cultura estadounidense.",
        Trailer: "https://www.youtube.com/embed/uPIEn0M8su0",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Comedia, Drama",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        Titulo: "El Club de la Pelea",
        Sinopsis: "La película sigue a un hombre insomne sin nombre (interpretado por Edward Norton) que forma un club de lucha underground con Tyler Durden (interpretado por Brad Pitt), un carismático vendedor de jabón. Pero las cosas se complican cuando el club de la pelea evoluciona a algo mucho más grande y peligroso.",
        Trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
        Puntuacion: [],
        CineDondeVerla: ['Showcase Cinemas'],
        Genero: "Drama, Suspenso",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
        Titulo: "El Exorcista",
        Sinopsis: "La película sigue a una madre que busca ayuda para su hija poseída por un demonio y a un sacerdote que se enfrenta al mal en una batalla por el alma de la niña.",
        Trailer: "https://www.youtube.com/embed/YDGw1MTEe9k",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts','Showcase Cinemas','Abasto Cine'
      ],
        Genero: "Terror",
        Plataforma: "Netflix",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/qJ9Cw1J4EmhBApoue4qlhqVrCZ7.jpg",
        Titulo: "La Masacre de Texas",
        Sinopsis: "La película sigue a un grupo de amigos que se encuentran en el camino de una familia de caníbales en Texas.",
        Trailer: "https://www.youtube.com/embed/0jiIGZwnntU",
        Puntuacion: [],
        CineDondeVerla: ['Cine Hoyts'],
        Genero: "Terror, Slasher",
        Plataforma: "HBO Max",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        Titulo: "El Conjuro",
        Sinopsis: "La película sigue a dos investigadores paranormales que ayudan a una familia a enfrentar una presencia malévola en su casa.",
        Trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
        Puntuacion: [],
        CineDondeVerla: ['Abasto Cine'  ],
        Genero: "Terror, Sobrenatural",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/gCZDVukBtz90MskMjEE2dYTSMEl.jpg",
        Titulo: "La Noche de los Muertos Vivientes",
        Sinopsis: "La película sigue a un grupo de personas que luchan por sobrevivir en una granja mientras los muertos vivientes se levantan de sus tumbas y comienzan a atacarlos.",
        Trailer: "https://www.youtube.com/embed/I-o_znDnRh8",
        Puntuacion: [],
        CineDondeVerla: ['Abasto Cine'],
        Genero: "Terror",
        Plataforma: "Netflix",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
        Titulo: "El Resplandor",
        Sinopsis: "La película sigue a un hombre que se convierte en cuidador de un hotel aislado con su familia y comienza a perder la cordura mientras ocurren sucesos sobrenaturales en el lugar.",
        Trailer: "https://www.youtube.com/embed/5Cb3ik6zP2I",
        Puntuacion: [],
        CineDondeVerla: ['Abasto Cine','Cine Hoyts'],
        Genero: "Terror, Psicológico",
        Plataforma: "Hulu",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        Titulo: "El Silencio de los Inocentes",
        Sinopsis: "La película sigue a una joven agente del FBI que busca la ayuda de un asesino en serie encarcelado para atrapar a otro asesino en serie activo.",
        Trailer: "https://www.youtube.com/embed/W6Mm8Sbe__o",
        Puntuacion: [],
        CineDondeVerla: ['Abasto Cine'],
        Genero: "Terror, Suspenso",
        Plataforma: "Hulu",
        puntuacionMaxima: 5
      },
      {
        Poster: "https://www.themoviedb.org/t/p/original/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg",
        Titulo: "Hereditary",
        Sinopsis: "La película sigue a una familia que comienza a experimentar una serie de eventos espeluznantes después de la muerte de su abuela.",
        Trailer: "https://www.youtube.com/embed/V6wWKNij_1M",
        Puntuacion: [],
        CineDondeVerla: ['Abasto Cine','Cine Hoyts'],
        Genero: "Terror",
        Plataforma: "Amazon Prime Video",
        puntuacionMaxima: 5
      }
        
    ]
    
    export { peliculas }