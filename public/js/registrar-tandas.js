'use strict';

const boton_registrar_tandas = document.querySelector(".boton-registrar-tanda")

const registrar_tandas = () => {
    window.location.href = "registrar-tanda.html";
};

boton_registrar_tandas.addEventListener("click",registrar_tandas);