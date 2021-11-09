'use strict';

const lista_inputs_requeridos =  document.querySelector("[required]");

const verificar_espacios = () => {
    let verfificado = true;
    
    lista_inputs_requeridos.forEach((element) => {
        if (element.value) {
            element.classList.remove("error");
        } else {
            element.classList.add("error");
            verfificado = false;
        }
    });
};

const verificar_correo = (input) => {
    let expresion_correo = /^[a-z]+@[a-z]+\.(com|net|org|ac|cr)$/i;

    
};