'use strict';

const mongoose = require('mongoose');

const schema_pago = new mongoose.Schema({
    nombre_tarjeta: { type: String, required: true, unique: false },
    numero: { type: String, required: false, unique: false },
    tipo: { type: String, required: true, unique: false },
    expiracion: { type: String, required: true, unique: false },
    cvv: { type: Number, required: false, unique: false },
    nombre_dueno: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false },
    provincia: { type: String, required: false, unique: false },
    postal: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Pago', schema_pago, 'Pagos');