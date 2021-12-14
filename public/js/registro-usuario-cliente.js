'use strict';

const boton_enviar = document.querySelector("#boton-guardar");
const input_nombre = document.querySelector("#primer_nombre");
const input_sgnd_nombre = document.querySelector("#segundo_nombre");
const input_apellido = document.querySelector("#primer_apellido");
const input_sgnd_apellido = document.querySelector("#segundo_apellido");
const input_identificacion = document.querySelector("#identificacion");
const input_nacimiento = document.querySelector("#nacimiento");
const input_edad = document.querySelector("#edad");
const input_correo = document.querySelector("#correo");
const input_contrasena = document.querySelector("#contrasena");
const input_repcontrasena = document.querySelector("#repcontrasena");
const boton_ver_contrasena = document.querySelector("#boton-contrasena");

const boton_subir_imagen = document.querySelector("#btn-subir-imagen");
const contenedor_foto = document.querySelector("#contenedor-foto");

let fecha_max = new Date();
let dia_max = fecha_max.getDate();
let mes_max = fecha_max.getMonth() + 1;
let anio_max = fecha_max.getFullYear();

if (dia_max < 10) {
    dia_max = '0' + dia_max;
}
if (mes_max < 10) {
    mes_max = '0' + mes_max;
}

let fecha_min = (anio_max - 100) + "-" + mes_max + "-" + dia_max;

fecha_max = anio_max + "-" + mes_max + "-" + dia_max;

input_nacimiento.min = fecha_min
input_nacimiento.max = fecha_max

const obtenerDatos = () => {
    let nombre = input_nombre.value;
    let sgndNombre = input_sgnd_nombre.value;
    let apellido = input_apellido.value;
    let sgndApellido = input_sgnd_apellido.value;
    let identificacion = input_identificacion.value;
    let nacimiento = input_nacimiento.value;
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;

    let registro_exitoso = registrar_usuario(nombre, sgndNombre, apellido, sgndApellido, correo, contrasena, identificacion, nacimiento, "cliente");

    if (registro_exitoso) {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });
        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Ahora puede iniciar sesion"
        }).then((res) => {
            if (res.isConfirmed) {
                window.location.href = "login_page.html";
            }
        });
    }
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
    let expReg_identificacion = RegExp('[0-9]{9,12}'); //Formato esperado  9 o 12 numeros seguidos
    let expReg_Correo = RegExp('^[a-z0-9._-]+@[a-z]+(.com|.net|.org|.ac|.cr|.es)$', 'i'); //texto@texto.com ó .net ...
    let expReg_contrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).{8,15}$/;

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
    if (input_identificacion.value != '') {
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
            title: 'No se pudo registrar su usuario',
            text: 'Por favor revise los campos resaltados'
        });
    }
}

function mostrarContrasena() {
    var input_contrasena = document.querySelector("#contrasena");
    var boton_ver_contrasena = document.querySelector("#boton-contrasena");
    const input_repcontrasena = document.querySelector("#repcontrasena");
    if (input_contrasena.type === "password") {
        input_contrasena.type = "text";
        input_repcontrasena.type = "text";
        boton_ver_contrasena.innerHTML = "Ocultar contraseña";

    } else {
        input_contrasena.type = "password";
        input_repcontrasena.type = "password";
        boton_ver_contrasena.innerHTML = "Mostrar contraseña";

    }
}

boton_subir_imagen.addEventListener("click",subir_imagen(contenedor_foto));
boton_ver_contrasena.addEventListener('click', mostrarContrasena);
boton_enviar.addEventListener('click', validar);