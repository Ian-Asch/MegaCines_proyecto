'use strict';

const mongoose = require('mongoose');

const schema_usuario = new mongoose.Schema({
    nombre: {type: String, required: true, unique: false},
    segundo_nombre: {type: String, required: false, unique: false},
    primer_apellido: {type: String, required: true, unique: false},
    segundo_apellido: {type: String, required: false, unique: false},
    correo: {type: String, required: true, unique: true},
    contrasena: {type: String, required: true, unique: false},
    identificacion: {type: Number, required: true, unique: true},
    fecha_nacimiento: {type: String, required: true, unique: false},
    edad: {type: Number, required: true, unique: false},
    tipo_usuario: {type: String, required: true, unique: false}

    /* tres tipos de usuario
        - cliente
        - soporte
        - admin
    */
});

module.exports = mongoose.model('Usuario',schema_usuario,'Usuarios');