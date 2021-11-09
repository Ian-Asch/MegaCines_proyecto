'use strict';

const lista_inputs_requeridos =  document.querySelector("[required]");

let 

lista_inputs_requeridos.forEach((element) => {
    if (element.value) {
        element.classList.remove("error");
    } else {
        element.classList.add("error");
        verfificado = false;
    }
});