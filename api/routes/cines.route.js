'use strict';

const express = require('express');
const router = express.Router();
const Cine = require('../models/cines.model');

router.post('/registrar-cine', (req, res) => {
    let body = req.body;

    let nuevo_cine = new Cine({
        nombre: body.nombre,
        descripcion: body.descripcion,
        direccion: body.direccion,
        imagen: body.imagen
    });

    nuevo_cine.save((err, cine_db) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar el cine',
                err
            });
        } else {
            res.json({
                msj: 'El cine se registró exitosamente',
                cine_db
            });
        }
    });

});

router.get('/listar-cines',(req,res) => {
    Cine.find((err,lista_cines) => {
        if (err) {
            res.json({
                msj: "No se pudo listar los cines",
                err
            });
        } else {
            res.json({
                msj: "Los cines se listaron exitosamente",
                lista_cines
            });
        }
    });
});

router.get('/buscar-cine',(req,res) => {
    Cine.findOne({_id: req.query.id},(err,pelicula) => {
        if (err) {
            res.json({
                msj: 'No se pudo encontrar el cine',
                err
            });
        } else {
            res.json({
                msj: 'Se encontro el cine',
                pelicula
            });
        }
    });
});


router.delete('/eliminar-cine',(req,res) => {
    Cine.findOneAndRemove({ _id: req.body.id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar el cine',
                err
            });
        } else {
            res.json({
                msj: 'El cine se eliminó correctamente'
            });
        }
    });
});

module.exports = router;