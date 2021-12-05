'use strict';

const boton_cerrar_sesion = document.querySelector(".btn-cerrar-sesion");

const cerrar_sesion = () => {
    localStorage.removeItem("info-usuario");
    window.location.href = "landing_page.html";
};

boton_cerrar_sesion.addEventListener("click",cerrar_sesion);

// const cambiar_estilo_navegacion = () => {
//     let elemento_navegacion = document.querySelector('.header-principal');

//     if (elemento_navegacion.className == "header-principal") {
//         elemento_navegacion.className = "header-principal responsive";
//     } else {
//         elemento_navegacion.className = "header-principal";
//     }
// }