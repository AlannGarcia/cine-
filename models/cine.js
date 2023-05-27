const mongoose = require('mongoose');
const { Schema } = mongoose;

const cineSchema = new Schema({
  nombre: String,
  peliculas: Array,
  asientosDisponibles: Array,
  combos: Array
});

module.exports = mongoose.model('cines', cineSchema);


