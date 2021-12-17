'use strict';

const mongoose = require('mongoose');

const schema_cine = new mongoose.Schema({
    nombre: {type: String, required: true, unique: false},
    descripcion: {type: String, required: false, unique: false},
    direccion: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('Cine', schema_cine, 'Cines');