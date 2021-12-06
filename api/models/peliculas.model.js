'use strict';

const mongoose = require('mongoose');

const schema_pelicula = new mongoose.Schema({
    titulo: {type: ,required: ,unique: },
    descripcion: {type: ,required: ,unique: },
    ano: {type: ,required: ,unique: },
    duracion: {type: ,required: ,unique: },
    categorias: {type: ,required: ,unique: },
    idioma: {type: ,required: ,unique: },
    
});

module.exports = mongoose.model('Pelicula',schema_pelicula,'Peliculas')