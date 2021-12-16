'use strict';

const input_pelicula = document.querySelector('#slt-pelicula');
const input_inicio = document.querySelector("#input-inicio");
const input_finalizacion = document.querySelector("#input-finalizacion");
const input_hora_inicio = document.querySelector("#input-Hora-de-Inicio");
const input_sala = document.querySelector("#input-Sala");
const input_precio = document.querySelector("#input-Precio");
const boton_enviar = document.querySelector("#boton-guardar");




const obtenerDatos = () => {
    let pelicula = input_pelicula.value;
    let inicio = input_inicio.value;
    let finalizacion = input_finalizacion.value;
    let hora = input_hora_inicio.value;
    let sala = input_sala.value;
    let precio = input_precio.value;


    let registro_exitoso = registrar_tanda(pelicula, inicio, finalizacion, hora, sala, precio);

    if (registro_exitoso) {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";

        });
    }
}




let fecha_max = new Date();
let dia_max = fecha_max.getDate();
let mes_max = fecha_max.getMonth() + 1;
let anio_max = fecha_max.getFullYear();

if (dia_max < 10) {
    dia_max = '0' + dia_max;
}
if (mes_max < 10) {
    mes_max = '0' + mes_max;
}

let fecha_min = (anio_max - 100) + "-" + mes_max + "-" + dia_max;

fecha_max = anio_max + "-" + mes_max + "-" + dia_max;

input_inicio.min = fecha_min
input_finalizacion.min = fecha_min

input_inicio.max = fecha_max
input_finalizacion.max = fecha_max


const validar = () => {
    let error = false;


    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            icon: 'warning', //Success, error, warning
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor revise los campos resaltados'
        });
    }
    
}


const limpiar = () => {
    input_pelicula.value = '';
    input_inicio.value = '';
    input_finalizacion.value = '';
    input_hora_inicio.value = '';
    input_sala.checked = false;
    input_precio.value = '';
    }
boton_enviar.addEventListener('click', validar);


let pelicula = input_pelicula.value;
let inicio = input_inicio.value;
let finalizacion = input_finalizacion.value;
let hora = input_hora_inicio.value;
let sala = input_sala.value;
let precio = input_precio.value;