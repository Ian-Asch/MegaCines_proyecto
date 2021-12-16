'use strict';

const express = require('express');
const router = express.Router();
const Tanda = require('../models/tandas.model');

router.post('/registrar-tanda',(req,res) => {
    //El req.body es igual al data del archivo servicio.js
    let nueva_tanda = new Tanda ({
    inicio: req.body.inicio,
    finalizacion: req.body.finalizacion,
    hora: req.body.hora,
    sala: req.body.sala,
    precio: req.body.precio,
    pelicula: req.body.pelicula
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
    Tanda.find((err,lista_tandas) => {
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

    Tanda.updateOne({_id: body.id}, {$set: body}, (err, info) => {
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

router.delete('/eliminar-tanda',(req,res) => {
    Tanda.findOneAndRemove({ _id: req.body.id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar la tanda',
                err
            });
        } else {
            res.json({
                msj: 'La tanda se eliminó correctamente'
            });
        }
    });
});

module.exports = router;