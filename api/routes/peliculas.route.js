'use strict';

const express = require('express');
const router = express.Router();
const Pelicula = require("../models/peliculas.model");

router.post('/registrar-pelicula',(req,res) => {
    let nueva_pelicula = new Pelicula ({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        ano: req.body.ano,
        duracion: req.body.duracion,
        categorias: req.body.categorias,
        idioma: req.body.idioma,
        subtitulos: req.body.subtitulos,
        idioma_subtitulos: req.body.idioma_subtitulos,
        categoria_edad: req.body.categoria_edad,
        imagen: req.body.imagen
    });

    nueva_pelicula.save((err, pelicula_bd) => {
        if (err) {
            res.json({
                msj: "No se pudo registrar la pelicula",
                err
            });
        } else {
            res.json({
                msj: "La pelicula se registro exitosamente",
                pelicula_bd
            });
        }
    });
});

router.get('/listar-peliculas',(req,res) => {
    Pelicula.find((err,lista_peliculas) => {
        if (err) {
            res.json({
                msj: "No se pudo listar las peliculas",
                err
            });
        } else {
            res.json({
                msj: "Las peliculas se listaron exitosamente",
                lista_peliculas
            });
        }
    });
});

router.get('/buscar-pelicula',(req,res) => {
    Pelicula.findOne({titulo: req.query.titulo},(err,pelicula) => {
        if (err) {
            res.json({
                msj: 'No se pudo encontrar la pelicula',
                err
            });
        } else {
            res.json({
                msj: 'Se encontro la pelicula',
                pelicula
            });
        }
    });
});

router.put('/modificar-pelicula',(req,res) => {
    Pelicula.updateOne({_id: req.body.id},{$set: req.body},(err,info) => {
        if (err) {
            res.json({
                msj: "No se pudo modificar la pelicula",
                err
            });
        } else {
            res.json({
                msj: "La pelicula se modifico exitosamente",
                info
            });
        }
    });
});

router.delete('/eliminar-pelicula',(req,res) => {
    Pelicula.findOneAndRemove({ _id: req.body.id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar la pelicula',
                err
            });
        } else {
            res.json({
                msj: 'La pelicula se elimin?? correctamente'
            });
        }
    });
});

module.exports = router;