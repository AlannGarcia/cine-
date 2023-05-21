const mongoose = require('mongoose');
const {Schema} = mongoose;

const cineSchema = new Schema({
  nombre: String,
  peliculas: [{ type: String}],
  asientos: { type: Number, required: true },
  asientosDisponibles: { type: Number, required: true },
  combos: [{ type: String }]
});

module.exports = mongoose.model('cine', cineSchema);