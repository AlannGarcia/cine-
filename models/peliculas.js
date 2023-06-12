const mongoose = require('mongoose');
const { Schema } = mongoose;

const peliculasSchema = new Schema({
    poster: String,
    titulo: String,
    sinopsis: String,
    trailer: String,
    puntuacion: Number,
    cinesDondeVerla: Array,
    genero: String,
    plataforma: String,
    puntuacionPromedio: Number,
});

module.exports = mongoose.model('peliculas', peliculasSchema);