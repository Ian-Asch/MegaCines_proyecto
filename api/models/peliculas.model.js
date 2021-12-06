'use strict';

const mongoose = require('mongoose');

const schema_pelicula = new mongoose.Schema({
    titulo: {type: String, required: true, unique: true},
    descripcion: {type: String, required: false, unique: false},
    ano: {type: Number, required: true, unique: false},
    duracion: {type: String, required: true, unique: false},
    // categorias: {type: [String], required: false, unique: false},
    idioma: {type: String, required: true, unique: false},
    subtitulos: {type: Boolean, required: true, unique: false},
    idioma_subtitulos: {type: String, required: false, unique: false}
});

module.exports = mongoose.model('Pelicula',schema_pelicula,'Peliculas')