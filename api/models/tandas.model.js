'use strict';

const mongoose = require('mongoose');

const schema_tandas = new mongoose.Schema({
    inicio: {type: String, required: true, unique: false},
    finalizacion: {type: Date, required: true, unique: false},
    hora: {type: String, required: true, unique: false},
    sala: {type: String, required: true, unique: false},
    precio: {type: Number, required: false, unique: false},
    pelicula: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('Tanda',schema_tandas,'Tandas');