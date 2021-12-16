'use strict';

const express = require('express');
const router = express.Router();
const Pago = require('../models/pagos.model');

router.post('/registrar-pago', (req, res) => {
    let body = req.body;

    let nuevo_pago = new Pago({
        nombre_tarjeta: body.nombre_tarjeta,
        numero: body.numero,
        tipo: body.tipo,
        expiracion: body.expiracion,
        cvv: body.cvv,
        nombre_dueno: body.nombre_dueno,
        direccion: body.direccion,
        provincia: body.provincia,
        postal: body.postal,
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

router.get('/listar-pagos',(req,res) => {
    Pago.find((err,lista_pagos) => {
        if (err) {
            res.json({
                msj: "No se pudo listar los pagos",
                err
            });
        } else {
            res.json({
                msj: "Los pagos se listaron exitosamente",
                lista_pagos
            });
        }
    });
});

module.exports = router;