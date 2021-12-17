'use strict';

const secc_cines = document.querySelector("#secc-cines");

let lista_cines;

const mostrar_cines = (lista) => {
    secc_cines.innerHTML = "";

    lista.forEach((cine) => {
        let div_cine = document.createElement("div");

        secc_cines.appendChild(div_cine);
    });
};

const todo = async() => {
    lista_cines = await listar_cines();
};

todo();