'use strict';

const boton_enviar = document.querySelector("#boton-guardar");
const input_nombre = document.querySelector("#nombre-tarjeta");
const input_identificacion = document.querySelector("#num-tarjeta");
const input_mes_exp = document.querySelector("#mes");
const input_ano_exp = document.querySelector("#ano");
const input_cvv = document.querySelector("#cvv");
const input_dir_nombre = document.querySelector("#direccion-nombre");
const input_codigo = document.querySelector("#codigo");

const obtenerDatos = () => {

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

    let expReg_soloLetras = /^[a-záéióúñ]+$/i;
    let expReg_identificacion = RegExp('[0-9]{16}'); //Formato esperado  9 o 12 numeros seguidos
    let expReg_Correo = RegExp('^[a-z0-9._-]+\@{1}[a-z]+(.com|.net|.org|.ac.cr|.es)$', 'i'); //texto@texto.com ó .net ...
    let expReg_contrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

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



    if (!expReg_identificacion.test(input_identificacion.value)) {
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

//valida el formato de contraseña
if (!expReg_contrasena.test(input_contrasena.value)) {
    error = true;
    input_contrasena.classList.add('error-input');
} else {
    input_contrasena.classList.remove('error-input');
}

//valida la contraseña se haya digitado bien 2 veces
if (input_contrasena.value != input_repcontrasena.value) {
    error = true;
    input_repcontrasena.classList.add('error-input');
} else {
    input_repcontrasena.classList.remove('error-input');
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

input_nacimiento.addEventListener("change", function() {
    if (input_nacimiento.value) {
        let edad = (calcularEdad(input_nacimiento.value));
        input_edad.value = (edad + " años");
    }
});

boton_enviar.addEventListener('click', validar);