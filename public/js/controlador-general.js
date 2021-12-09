'use strict';

// Este es un archivo general que va en todas las paginas html
// Por favor no borren nada del codigo que esta aqui

const boton_cerrar_sesion = document.querySelector(".btn-cerrar-sesion");

const primera_letra_mayuscula = (palabra) => {
    let nueva_palabra = "";
    let letra;

    for(let i = 0; i < palabra.length; i++) {
        if (i == 0) {
            letra = palabra[i].toUpperCase();
        } else {
            letra = palabra[i].toLowerCase();
        }

        nueva_palabra += letra;
    }

    return nueva_palabra;
};

const cerrar_sesion = () => {
    localStorage.clear();
    window.location.href = "landing_page.html";
};

boton_cerrar_sesion.addEventListener("click",cerrar_sesion);
