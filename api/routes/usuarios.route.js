'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios.model');
const mailer = require('../templates/singup-mail');

router.post('/registrar-usuario', (req, res) => {
    let body = req.body;

    let nuevo_usuario = new Usuario({
        nombre: body.nombre,
        segundo_nombre: body.segundo_nombre,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        nombre_completo: body.nombre_completo,
        correo: body.correo,
        contrasena: body.contrasena,
        identificacion: body.identificacion,
        fecha_nacimiento: body.fecha_nacimiento,
        edad: body.edad,
        tipo_usuario: body.tipo_usuario,
        foto: body.foto
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
            console.log("se supone que se manda el correo a " + usuario_db.correo);
            mailer.enviar_mail(usuario_db.correo, usuario_db.nombre, usuario_db.contrasena);
        }
    });

});

router.get('/listar-usuarios', (req, res) => {
    Usuario.find((err, lista_usuarios) => {
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

router.get('/iniciar-sesion', (req, res) => {
    let query = req.query;

    Usuario.findOne({ correo: query.correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: "Error iniciar sesion en route",
                err
            });
        } else {
            if (usuario) {
                if (usuario.contrasena == query.contrasena) {
                    res.json({
                        id: usuario._id,
                        nombre: usuario.nombre,
                        segundo_nombre: usuario.segundo_nombre,
                        primer_apellido: usuario.primer_apellido,
                        segundo_apellido: usuario.segundo_apellido,
                        nombre_completo: usuario.nombre_completo,
                        correo: usuario.correo,
                        identificacion: usuario.identificacion,
                        fecha_nacimiento: usuario.fecha_nacimiento,
                        edad: usuario.edad,
                        tipo_usuario: usuario.tipo_usuario,
                        foto: usuario.foto
                    });
                } else {
                    res.json({
                        msj: "La contraseña no es valida route",
                        error: true
                    });
                }
            } else {
                res.json({
                    msj: "El correo electronico no es correcto",
                    error: true
                        // En este caso el usuario es igual a null
                });
            }
        }
    });
});

router.put('/modificar-usuario', (req, res) => {
    let body = req.body;

    Usuario.updateOne({ _id: body.id }, { $set: body }, (err, info) => {
        if (err) {
            res.json({
                msj: "No se pudo modificar el usuario route",
                err
            });
        } else {
            res.json({
                msj: "El usuario se modifico correctamente",
                info
            });
        }
    });
});

router.delete('/eliminar-usuario', (req, res) => {
    Usuario.findOneAndRemove({ _id: req.body.id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar el usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se eliminó correctamente'
            });
        }
    });
});

module.exports = router;