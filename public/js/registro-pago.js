'use strict';

const boton_enviar = document.querySelector("#boton-guardar");
const input_nombre = document.querySelector("#nombre-tarjeta");
var input_num_tarjeta = document.querySelector("#num-tarjeta");
const input_tipo_tarjeta = document.querySelector("#tipo-tarjeta");
const input_mes_exp = document.querySelector("#mes");
const input_ano_exp = document.querySelector("#ano");
const input_cvv = document.querySelector("#cvv");
const input_dir_nombre = document.querySelector("#direccion-nombre");
const input_codigo = document.querySelector("#codigo");

const obtenerDatos = () => {

    Swal.fire({
        'icon': 'success',
        'title': 'Metodo de pago registrado con éxito',

    }).then(() => {
        history.back();
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

    let expReg_soloLetras = /^[a-záéióúñ]+$/i;
    let expReg_identificacion = RegExp('[0-9]{16}');
    let expReg_cvv = RegExp('[0-9]{3}');
    let expReg_visa = RegExp('^4[0-9]{6,}$');
    let expReg_mastercard = RegExp('^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$')
    let expReg_amex = RegExp('^3[47][0-9]{5,}$0');

    //let expReg_Correo = RegExp('^[a-z0-9._-]+\@{1}[a-z]+(.com|.net|.org|.ac.cr|.es)$', 'i'); //texto@texto.com ó .net ...
    //let expReg_contrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

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

    if (!expReg_soloLetras.test(input_dir_nombre.value)) {
        error = true;
        input_dir_nombre.classList.add('error-input');
    } else {
        input_dir_nombre.classList.remove('error-input');
    }


    if (!expReg_identificacion.test(input_num_tarjeta.value)) {
        error = true;
        input_num_tarjeta.classList.add('error-input');
    } else {
        input_num_tarjeta.classList.remove('error-input');
    }



    if (!expReg_cvv.test(input_cvv.value)) {
        error = true;
        input_cvv.classList.add('error-input');
    } else {
        input_cvv.classList.remove('error-input');
    }


    if (input_codigo.value < 10101) {
        error = true;
        input_codigo.classList.add('error-input');
    } else if (input_codigo.value > 70605) {
        error = true;
        input_codigo.classList.add('error-input');
    } else {
        input_codigo.classList.remove('error-input');
    }

    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            icon: 'warning', //Success, error, warning
            title: 'No se pudo registrar su método de pago',
            text: 'Por favor revise los campos resaltados'
        });
    }
}


const identificarTarjeta = (input_num_tarjeta) => {
    let tarjeta = '';
    let indicador = input_num_tarjeta.charAt(0);
    /*let expReg_visa = RegExp('^4[0-9]{6,}$');
    let expReg_mastercard = RegExp('^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$')
    let expReg_amex = RegExp('^3[47][0-9]{5,}$0');*/

    switch (indicador) {
        case "2":
            tarjeta = "MasterCard";
            break;
        case "3":
            tarjeta = "American express";
            break;
        case "4":
            tarjeta = "Visa";
            break;

        case "5":
            tarjeta = "MasterCard";
            break;
        default:
            tarjeta = "No identificada" //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
    }
    return tarjeta;
}

input_num_tarjeta.addEventListener("keyup", function() {

    if (input_num_tarjeta.value) {
        let tarjeta = (identificarTarjeta(input_num_tarjeta.value));
        input_tipo_tarjeta.value = tarjeta;
    }
});

boton_enviar.addEventListener('click', validar);