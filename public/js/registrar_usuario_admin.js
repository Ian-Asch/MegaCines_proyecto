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
    Swal.fire({
        'icon': 'éxito',
        'title': 'información valida',
        'text': 'usuario guardado exitosamente'
    });
}



const validar = () => {

    let expReg_soloLetras = /^[a-záéióúñ]+$/i;
    let expresion_correo = /^[a-z]+@[a-z]+\.(com|net|org|ac|cr)$/i;
    // let expresion_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s\d]).+$/;
    let expresion_solo_letras = /^[a-z\s]+$/i;
    let expresion_cedula = /^\d{9,12}$/;

    let error = false;

    if (input_nombre_registro.value == "") {
        error = true;
        input_nombre_registro.classList.add("error-input");
    } else {
        input_nombre_registro.classList.remove("error-input");
    }

    if (input_primer_apellido_registro.value == "") {
        error = true;
        input_primer_apellido_registro.classList.add("error-input");
    } else {
        input_primer_apellido_registro.classList.remove("error-input");
    }

    if (input_segundo_apellido_registro.value == "") {
        error = true;
        input_segundo_apellido_registro.classList.add("error-input");
    } else {
        input_segundo_apellido_registro.classList.remove("error-input");
    }

    if (input_identificacion_registro.value == "") {
        error = true;
        input_identificacion_registro.classList.add("error-input");
    } else {
        input_identificacion_registro.classList.remove("error-input");
    }


    if (input_correo_registro_admin.value == "") {
        error = true;
        input_correo_registro_admin.classList.add("error-input");
    } else {
        input_correo_registro_admin.classList.remove("error-input");
    }

    if (error == false) {
        obtenerDatos()
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'información incompleta',
            text: 'por favor llene todos los espacios'
        });


    }

    const calcularEdad = (input_nacimiento) => {
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDay());

        const anoNacimiento = parseInt(String(input_nacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(input_nacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(input_nacimiento).substring(8, 10));
        let edad = anoActual - anoNacimiento;
        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual == mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--;
            }

        }

        return edad;

    }

    input_nacimiento_registro_admin.addEventListener("change", function() {
        if (input_nacimiento_registro_admin.value) {
            let edad = (calcularEdad(input_nacimiento_registro_admin.value));
            input_edad_registro_admin.value = (edad + " años");
        }
    });

}

botonGuardar.addEventListener('click', validar)