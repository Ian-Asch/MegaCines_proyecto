'use strict';

const input_nombre_registro = document.querySelector("#nombre");
const input_segundo_nombre_registro = document.querySelector("#segundo_nombre");
const input_primer_apellido_registro = document.querySelector("#primer_apellido");
const input_segundo_apellido_registro = document.querySelector("#segundo_apellido");
const input_identificacion_registro = document.querySelector("#cedula");
const input_nacimiento_registro_admin = document.querySelector("nacimiento");
const input_edad_registro_admin = document.querySelector("#edad");
const input_correo_registro_admin = document.querySelector("#correo");
const botonGuardar = document.querySelector("#boton-guardar");

const obtenerDatos = () => {
    let nombre = input_nombre_registro.value;
    let segundoNombre = input_segundo_nombre_registro.value;
    let apellido = input_primer_apellido_registro.value;
    let segundoApellido = input_segundo_apellido_registro.value;
    let identificacion = input_identificacion_registro.value;
    let nacimiento = input_nacimiento_registro_admin.value;
    let edad = input_edad_registro_admin.value;
    let correo = input_correo_registro_admin.value;
}

const validar = () => {
    let error = false;
    if (input_nombre_registro.value == "") {
        error = true;
        input_nombre_registro.classList.add("error-input");
    }
}

botonGuardar.addEventListener('click', validar)