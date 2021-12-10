'use strict';

const input_nombre_registro = document.querySelector("#nombre");
const input_segundo_nombre_registro = document.querySelector("#segundo_nombre");
const input_primer_apellido_registro = document.querySelector("#primer_apellido");
const input_segundo_apellido_registro = document.querySelector("#segundo_apellido");
const input_identificacion_registro = document.querySelector("#cedula");
const input_nacimiento_registro_admin = document.querySelector("#nacimiento");
const input_edad_registro_admin = document.querySelector("#edad");
const input_correo_registro_admin = document.querySelector("#correo");
const field_usuario = document.getElementById("field_usuario")
const botonGuardar = document.querySelector("#boton-guardar");
const tipo_usuario = document.getElementsByName("tipo-usuario");




const obtenerDatos = () => {
    let nombre = input_nombre_registro.value;
    let sgndNombre = input_segundo_nombre_registro.value;
    let apellido = input_primer_apellido_registro.value;
    let sgndApellido = input_segundo_apellido_registro.value;
    let identificacion = input_identificacion_registro.value;
    let nacimiento = input_nacimiento_registro_admin.value;
    let correo = input_correo_registro_admin.value;
    let contrasena = contrasena_random();
    let tipo_usuario = usuario();

    let registro_exitoso = registrar_usuario(nombre, sgndNombre, apellido, sgndApellido, correo, contrasena, identificacion, nacimiento, tipo_usuario);

    if (registro_exitoso) {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";

        });
    }
}

const validar_vacios = () => {
    let error_vacio = false;
    let campos_requeridos = document.querySelectorAll(':required');

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

const usuario = () => {
    let usuario_checked = "";
    let campos_requeridos = document.getElementsByName("tipo-usuario");

    campos_requeridos.forEach(campo => {
        if (campo.checked == true) {
            usuario_checked = campo.value;
        }
    });
    return usuario_checked;
}

const contrasena_random = () => {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    var i = 1;

    for (i = 1; i <= 6; i++) {
        var char = Math.floor(Math.random() *
            str.length + 1);

        pass += str.charAt(char);
    }

    pass += "Mc1!";

    return pass;
}



const validar = () => {
    let error = false;

    let expReg_soloLetras = /^[a-záéióúñ]+$/i;
    let expReg_identificacion = RegExp('[0-9]{9,12}');
    let expReg_Correo = RegExp('^[a-z0-9._-]+\@{1}[a-z]+(.com|.net|.org|.ac.cr|.es)$', 'i');

    error = validar_vacios();

    if (tipo_usuario[0].checked == false && tipo_usuario[1].checked == false) {
        console.log("No se escogió usuario");
        error = true;
        field_usuario.classList.add("error-input");
    } else {
        field_usuario.classList.remove("error-input");
    }


    if (!expReg_soloLetras.test(input_nombre_registro.value)) {
        error = true;
        input_nombre_registro.classList.add('error-input');
    } else {
        input_nombre_registro.classList.remove('error-input');
    }

    if (input_segundo_nombre_registro.value != '') {
        if (!expReg_soloLetras.test(input_segundo_nombre_registro.value)) {
            error = true;
            input_segundo_nombre_registro.classList.add('error-input');
        } else {
            input_segundo_nombre_registro.classList.remove('error-input');
        }
    }

    if (!expReg_soloLetras.test(input_primer_apellido_registro.value)) {
        error = true;
        input_primer_apellido_registro.classList.add('error-input');
    } else {
        input_primer_apellido_registro.classList.remove('error-input');
    }

    if (input_segundo_apellido_registro.value != '') {
        if (!expReg_soloLetras.test(input_segundo_apellido_registro.value)) {
            error = true;
            input_segundo_apellido_registro.classList.add('error-input');
        } else {
            input_segundo_apellido_registro.classList.remove('error-input');
        }
    }


    if (!expReg_identificacion.test(input_identificacion_registro.value)) {
        error = true;
        input_identificacion_registro.classList.add('error-input');
    } else {
        input_identificacion_registro.classList.remove('error-input');
    }



    if (!expReg_Correo.test(input_correo_registro_admin.value)) {
        error = true;
        input_correo_registro_admin.classList.add('error-input');
    } else {
        input_correo_registro_admin.classList.remove('error-input');
    }

    if (error == false) {
        obtenerDatos()
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Información incompleta',
            text: 'Por favor llene todos los espacios'
        });


    }



}

const calcularEdad = (input_nacimiento_registro_admin) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDay());

    const anoNacimiento = parseInt(String(input_nacimiento_registro_admin).substring(0, 4));
    const mesNacimiento = parseInt(String(input_nacimiento_registro_admin).substring(5, 7));
    const diaNacimiento = parseInt(String(input_nacimiento_registro_admin).substring(8, 10));
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

botonGuardar.addEventListener('click', validar)