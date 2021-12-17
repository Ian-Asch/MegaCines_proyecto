'use strict';

const input_nombre = document.querySelector("#txt_nombre");
const input_descripcion = document.querySelector("#descripcion-cine");
const input_direccion = document.querySelector("#direccion-cine");
const boton_subir_imagen = document.querySelector("#btn-subir-imagen");
const contenedor_imagen = document.querySelector("#logo-cine");
const boton_registrar = document.querySelector("#btn-registrar");

const limpiar_espacios = () => {
    let lista_inputs = document.querySelectorAll("input");

    lista_inputs.forEach((input) => {
        input.value = "";
    });

    contenedor_imagen.src = "";
};

const obtener_datos = () => {
    let nombre = input_nombre.value;
    let descripcion = input_descripcion.value;
    let direccion = input_direccion.value;
    let imagen = contenedor_imagen.src;

    registrar_cine(nombre,descripcion,direccion,imagen).then((res) => {
        limpiar_espacios();
    });
};

boton_registrar.addEventListener("click",obtener_datos);

boton_subir_imagen.addEventListener("click",subir_imagen(contenedor_imagen));