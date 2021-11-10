'use strict';

const boton_enviar = document.querySelector("#boton-guardar");
const input_nombre = document.querySelector("#primer_nombre");
const input_sgnd_nombre = document.querySelector("#segundo_nombre");
const input_apellido = document.querySelector("#primer_apellido");
const input_sgnd_apellido = document.querySelector("#segundo_apellido");
var input_tipo_id = document.getElementsByName("identificacion");
const input_identificacion = document.querySelector("#identificacion");
const input_nacimiento = document.querySelector("#nacimiento");
const input_edad = document.querySelector("#edad");
const input_correo = document.querySelector("#correo");
const input_contrasena = document.querySelector("#contrasena");
const input_repcontrasena = document.querySelector("#repcontrasena");
const boton_ver_contrasena = document.querySelector("#boton-contrasena");

const obtenerDatos = () => {
    let nombre = input_nombre.value;
    let sgndNombre = input_sgnd_nombre.value;
    let apellido = input_apellido.value;
    let sgndApellido = input_sgnd_apellido.value;
    let tipoId = input_tipo_id.value;
    let identificacion = input_identificacion.value;
    let edad = input_edad.value;
    let nacimiento = input_nacimiento.value;
    let correo = input_correo.value;
    let contraseña = input_contrasena.value;
    let repcontraseña = input_repcontrasena.value;


    console.log('El nombre es: ' + nombre);
    console.log('El teléfono es: ', telefono);
    console.log(`El correo es: ${correo} y el comentario es ${comentario}.`);

    Swal.fire({
        'icon': 'success',
        'title': 'Mensaje enviado exitosamente',
        'text': 'Nos pondremos en contacto lo antes posible'
    }).then(() => {
        limpiar_pantalla();
    });
}

const validar_vacios = () => {
    let error_vacio = false;
    //Validar los campos vacios
    //los dos puntos del queryselector se usan cuando ocupamos acceder a un atributo del selector.
    let campos_requeridos = document.querySelectorAll(':required');
    //Una forma de iterar la lista
    /*for (let contador = 0; contador < campos_requeridos.length; contador++) {
        if (campos_requeridos[contador].value == '') {
            error = true;
            campos_requeridos[contador].classList.add("error-input");
        } else {
            campos_requeridos[contador].classList.remove("error-input");
        }
    }*/
    //Otra forma de iterar una lista: forEach
    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error_vacio = true;
            campo.classList.add("error-input");
        } else {
            campo.classList.remove("error-input");
        }
    });
    return error_vacio;
}

const validar = () => {
    let error = false;

    let expReg_soloLetras = /^[a-z]+$/i;
    let expReg_identificacion_ced = /'^[0-9]{9}'/; //Formato esperado  112341234
    let expReg_identificacion_pasaporte = /'^[0-9]{11,12}'/; //Formato esperado  11 o 12 numeros seguidos

    let expReg_Correo = RegExp('^[a-z0-9._-]+\@{1}[a-z]+(.com|.net|.org|.ac.cr|.es)$', 'i'); //texto@texto.com ó .net ...

    //Llamemos a la funcion que vlaida los campos vacios
    error = validar_vacios();

    //Validemos las Exp Regulares
    //Validar si el nombre y apellidos tiene solo letras
    if (!expReg_soloLetras.test(input_nombre.value)) {
        error = true;
        input_nombre.classList.add('error-input');
    } else {
        input_nombre.classList.remove('error-input');
    }

    //segundo nombre es opcional, por lo que si esta vacio todo bien
    if (input_sgnd_nombre.value != '') {
        if (!expReg_soloLetras.test(input_sgnd_nombre.value)) {
            error = true;
            input_sgnd_nombre.classList.add('error-input');
        } else {
            input_sgnd_nombre.classList.remove('error-input');
        }
    }

    if (!expReg_soloLetras.test(input_apellido.value)) {
        error = true;
        input_apellido.classList.add('error-input');
    } else {
        input_apellido.classList.remove('error-input');
    }

    //segundo apellido es opcional, por lo que si esta vacio todo bien
    if (input_sgnd_apellido.value != '') {
        if (!expReg_soloLetras.test(input_sgnd_apellido.value)) {
            error = true;
            input_sgnd_apellido.classList.add('error-input');
        } else {
            input_sgnd_apellido.classList.remove('error-input');
        }
    }

    //valida el formato del ID
    if (input_tipo_id[0].checked = true) {
        if (!expReg_identificacion_ced.test(input_identificacion.value)) {
            error = true;
            input_identificacion.classList.add('error-input');
        } else {
            input_identificacion.classList.remove('error-input');
        }
    }

    if (input_tipo_id[1].checked = true) {
        if (!expReg_identificacion_pasaporte.test(input_identificacion.value)) {
            error = true;
            input_identificacion.classList.add('error-input');
        } else {
            input_identificacion.classList.remove('error-input');
        }
    }

    //valida el formato del correo
    if (!expReg_Correo.test(input_correo.value)) {
        error = true;
        input_correo.classList.add('error-input');
    } else {
        input_correo.classList.remove('error-input');
    }

    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            icon: 'warning', //Success, error, warning
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor revise los campos resaltados'
        });
    }
}

const limpiar_pantalla = () => {
    input_nombre.value = "";
    input_correo.value = "";
    input_nombre.value = "";
    input_sgnd_nombre.value = "";
    input_apellido.value = "";
    input_sngd_apellido.value = "";
    input_tipo_id_ced.value = "";
    input_tipo_id_pas.value = "";
    input_identificacion.value = "";
    input_nacimiento.value = "";
    input_edad.value = "";
    input_correo.value = "";
    input_contrasena.value = "";
    input_repcontrasena.value = "";
}

boton_enviar.addEventListener('click', validar);