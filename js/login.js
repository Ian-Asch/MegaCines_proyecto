//Implementar el modo estricto en todos los JS
'use strict';

//Referencia de los campos HTMLs. (Elementos como tal, no su valor)
const input_nombre = document.querySelector('#txt-usuario');
const input_contrasenna = document.querySelector('#txt-contrasenna');
const boton_ingresar = document.querySelector('#btn-ingresar');

const obtenerDatos = () => {
    console.log(`El nombre es ${input_nombre.value}`);
    console.log(`La contraseña es: ${input_contrasenna.value}`);
};

boton_ingresar.addEventListener('click', obtenerDatos);