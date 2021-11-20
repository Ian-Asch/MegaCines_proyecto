'use strict';

const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/registrar-usuario',(req, res) => {
    let body = req.body;

    let nuevo_usuario = new Usuario ({
        nombre: body.nombre,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        correo: body.correo,
        identificacion: body.identificacion,
        fecha_nacimiento: body.fecha_nacimiento,
        edad: body.edad,
        tipo_usuario: body.tipo_usuario
    });

    nuevo_usuario.save((err, usuario_db) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar un usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se registro exitosamente',
                usuario_db
            });
        }
    });

});

router.get('/listar-usuarios', (req, res) => {
    Usuario.find((err,lista_usuarios) => {
        if (err) {
            res.json({
                msj: 'No se puedo listar los usuarios',
                err
            });
        } else {
            res.json({
                msj: 'Los usuarios se listaron exitosamente',
                lista_usuarios
            });
        }
    });
});

model.exports = router;