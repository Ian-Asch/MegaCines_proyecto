'use strict';

const mongoose = require('mongoose');

const schema_pelicula = new mongoose.Schema({
    titulo: {type: String, required: true, unique: true},
    descripcion: {type: String, required: false, unique: false},
    ano: {type: Number, required: true, unique: false},
    duracion: {type: String, required: true, unique: false},
    categorias: {type: [String], required: false, unique: false}, //Este es una lista de categorias y la lista debe ser de solo strings
    idioma: {type: String, required: true, unique: false},
    subtitulos: {type: Boolean, required: true, unique: false},//Este atributo es bolean entonces su valor solo puede ser true o false.
    idioma_subtitulos: {type: String, required: false, unique: false}/*,
    tandas: [{ //Esta parte no se si se va a usar. Por ahora no tocar
        fecha: , //La fecha y la hora podrian ser un mismo atributo de tipo Date
        hora: ,
        sala: {type: String, required: , unique: },
        cine: {type: String, required: , unique: }
    }]*/
});

module.exports = mongoose.model('Pelicula',schema_pelicula,'Peliculas')