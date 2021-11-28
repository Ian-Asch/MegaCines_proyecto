'use strict';

const input_nombre = document.querySelector("#nombre");
const input_codigo = document.querySelector("#codigo_sala");
const input_tipo = document.querySelector("#tipo_sala");
const input_ubicacion = document.querySelector("#ubicacion");
const input_cantidad = document.querySelector("#cantidad_butacas");
const input_categoria = document.querySelector("#categoria_butacas");
const input_precio = document.querySelector("#precio_butacas");
const botonGuardar = document.querySelector("#guardar-boton");



const obtenerDatos = () => {
    let nombre = input_nombre.value;
    let codigo = input_codigo.value;
    let tipo = input_tipo.value;
    let ubicacion = input_ubicacion.value;
    let cantidad = input_cantidad.value;
    let categoria = input_categoria.value;
    let edad = input_edad_registro_admin.value;
    let precio = input_precio.value;
    let guardar = botonGuardar.value;

    Swal.fire({
        'icon': 'éxito',
        'title': 'información valida',
        'text': 'usuario guardado exitosamente'
    });
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


const validar = () => {

    let expReg_soloLetras = /^[a-záéióúñ]+$/i;

    let error = false;


    if (!expReg_soloLetras.test(input_nombre.value)) {
        error = true;
        input_nombre.classList.add('error-input');
    } else {
        input_nombre.classList.remove('error-input');
    }

    if (!expReg_soloLetras.test(input_codigo.value)) {
        error = true;
        input_codigo.classList.add('error-input');
    } else {
        input_codigo.classList.remove('error-input');
    }

    if (!expReg_soloLetras.test(input_tipo.value)) {
        error = true;
        input_tipo.classList.add('error-input');
    } else {
        input_tipo.classList.remove('error-input');
    }

    if (!expReg_soloLetras.test(input_ubicacion.value)) {
        error = true;
        input_ubicacion.classList.add('error-input');
    } else {
        input_ubicacion.classList.remove('error-input');
    }

    if (!expReg_soloLetras.test(input_cantidad.value)) {
        error = true;
        input_cantidad.classList.add('error-input');
    } else {
        input_cantidad.classList.remove('error-input');
    }


    if (!expReg_soloLetras.test(input_categoria.value)) {
        error = true;
        input_categoria.classList.add('error-input');
    } else {
        input_categoria.classList.remove('error-input');
    }

    if (!expReg_soloLetras.test(input_precio.value)) {
        error = true;
        input_precio.classList.add('error-input');
    } else {
        input_precio.classList.remove('error-input');
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

}

botonGuardar.addEventListener('click', validar)