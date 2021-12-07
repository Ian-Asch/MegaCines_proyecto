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

// const sumar = (num1,num2) => {
//     return num1 + num2;
// };

// const func2 = (func_ejecutar) => {
//     func_ejecutar(3,6)
// }

// func2(sumar)

//La linea 41 es exactamente lo mismo que los de las lineas 45, 46 y 47

// func2((num1,num2) => {
//     return num1 + num2;
// })