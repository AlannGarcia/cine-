const cines = require('./cine.js');
const User = require('./user.js')


const c1 = User.find();
const c2 = cines.findOne({nombre: "Showcase Cinemas"});

console.log({c1});