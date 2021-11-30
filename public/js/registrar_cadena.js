'use strict';

const codigo = document.querySelector("#txt_codigo");
const cadena = document.querySelector("#txt_cadena");
const registrar = document.querySelector("#btn-registrar");


const obtenerDatos = () => {


    let codigo_input = codigo.value;
    let cadena_input = cadena.value;


    console.log("El codigo de la cadena es:" + codigo_input);
    console.log("El nombre de la cadena es:" + cadena_input);

    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado exitosamente'

    })

}

const validar = () => {
    let error = false;

    if (codigo.value == "") {
        error = true;
        codigo.classList.add("error-input");

    } else {
        codigo.classList.remove("error-input");
    }

    if (cadena.value == "") {
        error = true;
        cadena.classList.add("error-input");

    } else {
        cadena.classList.remove("error-input");
    }

    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor ingrese la información requerida'
        })
    }
}


registrar.addEventListener("click", validar);