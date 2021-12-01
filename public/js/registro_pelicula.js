'use strict';

const titulo = document.querySelector("#txt_titulo");
const duracion = document.querySelector("#txt_duracion");
const horario1 = document.querySelector("#horario_1");
const horario2 = document.querySelector("#horario_2");
const dias = document.querySelector("#txt_dias");
const costoEntrada = document.querySelector("#costo_entrada");

const registrar = document.querySelector("#btn-registrar");


const obtenerDatos = () => {


    let titulo_input = titulo.value;
    let duracion_input = duracion.value;
    let horario1_input = horario1.value;
    let horario2_input = horario2.value;
    let dias_input = dias.value;
    let costo_input = costoEntrada.value;

    console.log("El titulo de la pelicula es:" + titulo_input);
    console.log("La duracion de la pelicula es:" + duracion_input);
    console.log("El horario de la pelicula es de:" + horario1_input + "hasta:" + horario2_input + "Los dias: " + dias_input);
    console.log("El costo de la entrada es: " + costo_input);

    Swal.fire({
        icon: 'success',
        title: 'Película registrada exitosamente'

    })

}

const validar = () => {
    let error = false;

    if (titulo.value == "") {
        error = true;
        titulo.classList.add("error-input");

    } else {
        titulo.classList.remove("error-input");
    }

    if (duracion.value == "") {
        error = true;
        duracion.classList.add("error-input");

    } else {
        duracion.classList.remove("error-input");
    }

    if (horario1.value == "") {
        error = true;
        horario1.classList.add("error-input");

    } else {
        horario1.classList.remove("error-input");
    }

    if (horario2.value == "") {
        error = true;
        horario2.classList.add("error-input");

    } else {
        horario2.classList.remove("error-input");
    }
    if (dias.value == "") {
        error = true;
        dias.classList.add("error-input");

    } else {
        dias.classList.remove("error-input");
    }

    if (costoEntrada.value == "") {
        error = true;
        costoEntrada.classList.add("error-input");

    } else {
        costoEntrada.classList.remove("error-input");
    }

    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo registrar la película',
            text: 'Por favor ingrese la información requerida'
        })
    }
}


registrar.addEventListener("click", validar);