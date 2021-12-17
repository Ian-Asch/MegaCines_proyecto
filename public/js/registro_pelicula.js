'use strict';

const titulo = document.querySelector("#txt_titulo");
const input_descripcion = document.querySelector("#text-descripcion");
const input_anio = document.querySelector("#anio-pelicula");
const input_categoria = document.querySelector("#text-categoria");
const input_idioma = document.querySelector("#txt-idioma");
const input_sub_idioma = document.querySelector("#txt-idioma-subtitulos");
const duracion = document.querySelector("#txt_duracion");

const imagen_pelicula = document.querySelector("#imagen-pelicula");

const boton_subir_imagen = document.querySelector("#btn-subir-imagen");
const boton_registrar = document.querySelector("#btn-registrar");


const obtenerDatos = () => {
    let titulo_pelicula = titulo.value;
    let descripccion = input_descripcion.value;
    let anio = input_anio.value;
    let duracion_pelicula = duracion.value;
    let idioma = input_idioma.value;
    let subtitulos;
    let idioma_subtitulos;
    if (input_sub_idioma.value) {
        subtitulos = true;
        idioma_subtitulos = input_sub_idioma.value;
    } else {
        subtitulos = false;
        idioma_subtitulos = null;
    }
    let categorias = input_categoria.value;
    let clasificacion_edad;
    if (document.querySelector("input:checked")) {
        clasificacion_edad = document.querySelector("input:checked").value
    } else {
        clasificacion_edad = "Para todo publico"
    }
    let imagen = imagen_pelicula.src;
    
    registrar_pelicula(titulo_pelicula,descripccion,anio,duracion_pelicula,idioma,subtitulos,categorias,idioma_subtitulos,clasificacion_edad,imagen).then((resultado) => {
        if (resultado) {
            document.querySelectorAll(".width").forEach((input) => {
                input.value = "";
            });
            document.querySelectorAll("[type=radio]").forEach((radio) => {
                radio.checked = false;
            });
            imagen_pelicula.src = "";
        }
    });
}

const validar = () => {
    let error = false;
    //Expresiones regularess
    let expReg_titulo = /^[a-z\s0-9áéíóú]+$/i;

    document.querySelectorAll("[required]").forEach((input) => {
        if (input.value) {
            input.classList.remove("error");
        } else {
            input.classList.add("error");
            error = true;
        }
    });

    //Validacion de titulo de pelicula
    if (titulo.value == "" || !expReg_titulo.test(titulo.value)) {
        error = true;
        titulo.classList.add("error-input");


    } else {
        titulo.classList.remove("error-input");
    }

    return !error;
}


boton_subir_imagen.addEventListener("click",subir_imagen(imagen_pelicula));


boton_registrar.addEventListener("click", () => {
    if (validar()) {
        obtenerDatos()
    } else {
        Swal.fire({
            title: "Error",
            text: "Por favor llene los espacios en rojo",
            icon: "warning"
        });
    }
});