'use strict';

const cambiar_estilo_navegacion = () => {
    let elemento_navegacion = document.querySelector('.header-principal');

    if (elemento_navegacion.className == "header-principal") {
        elemento_navegacion.className = "header-principal responsive";
    } else {
        elemento_navegacion.className = "header-principal";
    }
}