'use strict';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const id_cine = params[""];
let cine;

const nombre_cine = document.querySelector("#nombre-cine");
const descripcion_cine = document.querySelector("#descripcion-cine");
const direccion_cine = document.querySelector("#direccion");

const imagen_cine = document.querySelector("#imagen-cine");

const todo = async() => {
    cine = await conseguir_cine(id_cine);

    nombre_cine.innerText = cine.nombre;
    descripcion_cine.innerText = cine.descripcion;
    direccion_cine.innerText = cine.direccion;
    imagen_cine.src = cine.imagen;
};

todo()