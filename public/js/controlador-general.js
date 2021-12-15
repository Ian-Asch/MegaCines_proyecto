'use strict';

// Este es un archivo general que va en todas las paginas html
// Por favor no borren nada del codigo que esta aqui
const link_perfil = document.querySelector("#a-perfil");
const link_configuracion = document.querySelector("#a-configuracion");

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


const subir_imagen = (contenedor_img) => {
    //Usar esta funcion en un event listener
    //contenedor_img es un elemento <img> en donde se va a mostrar la imagen subida

    //Ejemplo:
    // boton_subir_imagen.addEventListener("click",subir_imagen(contenedor_foto));

    const myWidget = cloudinary.createUploadWidget({cloudName: 'MegaCines',uploadPreset: 'yyuc70y1'}, (error, result) => { 
        if (!error && result && result.event === "success") {
            console.log('Imagen guardada', result.info);
            contenedor_img.src = result.info.secure_url;
        }
    });
    
    return () => {myWidget.open();};
};


const cerrar_sesion = () => {
    localStorage.clear();
    window.location.href = "login_page.html";
};


boton_cerrar_sesion.addEventListener("click",cerrar_sesion);


let usuario_tipo = JSON.parse(localStorage.getItem("info-usuario")).tipo_usuario;

if (usuario_tipo == "admin") {
    link_perfil.href = "perfil_usuario_admin.html";
    link_configuracion.href = "pagina-configuracion-admin.html";
} else {
    link_perfil.href = "perfil_jefe_soporte.html";
    link_configuracion.href = "pagina-configuracion-soporte.html";
}