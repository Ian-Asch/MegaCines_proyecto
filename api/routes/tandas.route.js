'use strict';

const express = require('express');
const router = express.Router();
const Tanda = require('../models/tandas.model');

router.post('/registrar-tanda',(req,res) => {
    //El req.body es igual al data del archivo servicio.js
    let nueva_tanda = new Tanda ({
    pelicula: req.body.pelicula,
    fecha: req.body.fecha,
    sala: req.body.sala,
    cine: req.body.cine,
    precio: req.body.precio,
    duracion: req.body.duracion
    })

    nueva_tanda.save((err,tanda_bd) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar la tanda',
                err
            });
        } else {
            res.json({
                msj: 'La tanda se registro exitosamente',
                tanda_bd
            });
        }
    });
});
router.get('/listar-tandas', (req, res) => {
    Usuario.find((err,lista_tandas) => {
        if (err) {
            res.json({
                msj: 'No se puedo listar las tandas',
                err
            });
        } else {
            res.json({
                msj: 'Las tandas se listaron exitosamente',
                lista_tandas
            });
        }
    });
});
router.put('/modificar-tandas', (req,res) => {
    let body = req.body;

    tandas.updateOne({_id: body.id}, {$set: body}, (err, info) => {
        if (err) {
            res.json({
                msj: "No se pudo modificar la tanda route",
                err
            });
        } else {
            res.json({
                msj: "La tanda se modifico correctamente",
                info
            });
        }
    });
});

module.exports = router;