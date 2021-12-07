'use strict';

const mongoose = require('mongoose');

const schema_tandas = new mongoose.Schema({
    pelicula: {type: String, required: true, unique: false},
    fecha: {type: Date, required: true, unique: false},
    sala: {type: String, required: true, unique: false},
    cine: {type: String, required: true, unique: false},
    precio: {type: Number, required: false, unique: false},
    duracion: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('Tanda',schema_tandas,'Tandas');