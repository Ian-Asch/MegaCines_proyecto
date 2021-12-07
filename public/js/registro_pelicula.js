'use strict';

const titulo = document.querySelector("#txt_titulo");
const duracion = document.querySelector("#txt_duracion");
const horario1 = document.querySelector("#horario_1");
const horario2 = document.querySelector("#horario_2");
const costoEntrada = document.querySelector("#costo_entrada");

const registrar = document.querySelector("#btn-registrar");


const obtenerDatos = () => {


    let titulo_input = titulo.value;
    let duracion_input = duracion.value;
    let horario1_input = horario1.value;
    let horario2_input = horario2.value;
    let costo_input = costoEntrada.value;

    console.log("El titulo de la pelicula es:" + titulo_input);
    console.log("La duracion de la pelicula es:" + duracion_input);
    console.log("El horario de la pelicula es de:" + horario1_input + "hasta:" + horario2_input);
    console.log("El costo de la entrada es: " + costo_input);

    Swal.fire({
        icon: 'success',
        title: 'Película registrada exitosamente'

    })

}

const validar = () => {
    let error = false;
    //Expresiones regulares
    let expReg_hora = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i;
    let expReg_tiempo = /^[0-9]+$/i;
    let expReg_titulo = /^[a-z]+$/i;

    //Validacion de titulo de pelicula
    if (titulo.value == "" || !expReg_titulo.test(titulo.value)) {
        error = true;
        titulo.classList.add("error-input");


    } else {
        titulo.classList.remove("error-input");
        console.log('Titulo de pelicula: ' + titulo.value);
    }
    //Validacion de categorias de pelicula
    let categoria1 = true;
    let categoria2 = true;
    let categoria3 = true;
    let categoria4 = true;
    let categoria5 = true;
    let categoria6 = true;

    if (document.getElementById('terror').checked) {
        console.log("Categoría seleccionada: Terror");
    } else {
        categoria1 = false;
    }

    if (document.getElementById('ciencia').checked) {
        console.log("Categoría seleccionada: Ciencia ficción");
    } else {
        categoria2 = false;
    }
    if (document.getElementById('drama').checked) {
        console.log("Categoría seleccionada: Drama");
    } else {
        categoria3 = false;
    }
    if (document.getElementById('accion').checked) {
        console.log("Categoría seleccionada: Accción");
    } else {
        categoria4 = false;
    }
    if (document.getElementById('comedia').checked) {
        console.log("Categoría seleccionada: Comedia");
    } else {
        categoria5 = false;
    }
    if (document.getElementById('infantiles').checked) {
        console.log("Categoría seleccionada: Infantiles");
    } else {
        categoria6 = false;
    }
    if (categoria1 == false && categoria2 == false && categoria3 == false && categoria4 == false && categoria5 == false && categoria6 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }
    //Validacion de idiomas seleccionados 

    let idioma1 = true;
    let idioma2 = true;
    let idioma3 = true;
    let idioma4 = true;

    if (document.getElementById('espanol').checked) {
        console.log("Idioma selecionado: Español");
    } else {
        idioma1 = false;
    }

    if (document.getElementById('ingles').checked) {
        console.log("Idioma selecionado: Inglés");
    } else {
        idioma2 = false;
    }

    if (document.getElementById('sub_espa').checked) {
        console.log("Idioma selecionado: Sub Español");
    } else {
        idioma3 = false;
    }

    if (document.getElementById('sub_ingles').checked) {
        console.log("Idioma selecionado:Sub Inglés");
    } else {
        idioma4 = false;
    }
    if (idioma1 == false && idioma2 == false && idioma3 == false && idioma4 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }

    //Validacion de duracion de pelicula

    if (duracion.value == "" || !expReg_tiempo.test(duracion.value)) {
        error = true;
        duracion.classList.add("error-input");

    } else {
        duracion.classList.remove("error-input");
        console.log('Titulo de pelicula: ' + duracion.value + 'minutos');
    }
    //Validacion de clasificacion de edad 

    let edad1 = true;
    let edad2 = true;
    let edad3 = true;

    if (document.getElementById('12').checked) {
        console.log('La clasificacion de edad es: Mayores de 12');
    } else {
        edad1 = false;
    }
    if (document.getElementById('15').checked) {
        console.log('La clasificacion de edad es: Mayores de 15');
    } else {
        edad2 = false;
    }
    if (document.getElementById('18').checked) {
        console.log('La clasificacion de edad es: Mayores de 18');
    } else {
        edad3 = false;
    }

    if (edad1 == false && edad2 == false && edad3 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }

    //Validacion de salas 

    let sala_1 = true;
    let sala_2 = true;
    let sala_3 = true;
    let sala_4 = true;
    let sala_5 = true;
    let sala_6 = true;

    if (document.getElementById('sala1').checked) {
        console.log('La sala seleccionada es: sala 1');
    } else {
        sala_1 = false;
    }
    if (document.getElementById('sala2').checked) {
        console.log('La sala seleccionada es: sala 2');
    } else {
        sala_2 = false;
    }
    if (document.getElementById('sala3').checked) {
        console.log('La sala seleccionada es: sala 3');
    } else {
        sala_3 = false;
    }
    if (document.getElementById('sala4').checked) {
        console.log('La sala seleccionada es: sala 4');
    } else {
        sala_4 = false;
    }
    if (document.getElementById('sala5').checked) {
        console.log('La sala seleccionada es: sala 5');
    } else {
        sala_5 = false;
    }
    if (document.getElementById('sala6').checked) {
        console.log('La sala seleccionada es: sala 6');
    } else {
        sala_6 = false;
    }

    if (sala_1 == false && sala_2 == false && sala_3 == false && sala_4 == false && sala_5 == false && sala_6 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }
    //Validar horario de proyeccion 
    if (horario1.value == "" || !expReg_hora.test(horario1.value)) {
        error = true;
        horario1.classList.add("error-input");

    } else {
        horario1.classList.remove("error-input");
    }

    if (horario2.value == "" || !expReg_hora.test(horario2.value)) {
        error = true;
        horario2.classList.add("error-input");

    } else {
        horario2.classList.remove("error-input");
    }
    //Validacion del costo de entrada 

    if (costoEntrada.value == "") {
        error = true;
        costoEntrada.classList.add("error-input");

    } else {
        costoEntrada.classList.remove("error-input");
    }

    if (error == false) {

    } else {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo registrar la película',
            text: 'Por favor ingrese la información requerida'
        })
    }
}


registrar.addEventListener("click", validar);