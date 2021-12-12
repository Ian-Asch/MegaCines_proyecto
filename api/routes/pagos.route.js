'use strict';

const express = require('express');
const router = express.Router();
const Pago = require('../models/pagos.model');

router.post('/registrar-pago', (req, res) => {
    let body = req.body;

    let nuevo_pago = new Pago({
        nombre_tarjeta: body.nombre,
        numero: body.segundo_nombre,
        tipo: body.primer_apellido,
        expiracion: body.segundo_apellido,
        cvv: body.correo,
        nombre_dueno: body.contrasena,
        direccion: body.identificacion,
        provincia: body.fecha_nacimiento,
        postal: body.edad,
    });

    nuevo_pago.save((err, usuario_db) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar el metodo de pago',
                err
            });
        } else {
            res.json({
                msj: 'El metodo de pago se registró exitosamente',
                usuario_db
            });
        }
    });

});

router.put('/modificar-pago', (req, res) => {
    let body = req.body;

    Pago.updateOne({ _id: body.id }, { $set: body }, (err, info) => {
        if (err) {
            res.json({
                msj: "No se pudo modificar el metodo de pago",
                err
            });
        } else {
            res.json({
                msj: "El metodo de pago se modificó exitosamente",
                info
            });
        }
    });
});

module.exports = router;