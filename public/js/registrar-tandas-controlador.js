'use strict';

const input_pelicula = document.querySelector('#slt-pelicula');
const input_inicio = document.querySelector("#input-inicio");
const input_hora_inicio = document.querySelector("#input-Hora-de-Inicio");
const input_sala = document.querySelector("#input-Sala");
const input_precio = document.querySelector("#input-Precio");
const boton_enviar = document.querySelector("#boton-guardar");

const llenar_select = async() => {
    let lista_peliculas = await listar_peliculas();

    lista_peliculas.forEach((pelicula) => {
        let opcion = document.createElement("option");
        opcion.innerText = pelicula.titulo;
        opcion.value = pelicula.titulo;

        input_pelicula.appendChild(opcion);
    });
}

llenar_select()


const obtenerDatos = () => {
    let pelicula = input_pelicula.value;
    let inicio = input_inicio.value;
    let hora = input_hora_inicio.value;
    let sala = input_sala.value;
    let precio = Number(input_precio.value);


    let registro_exitoso = registrar_tanda(inicio, hora, sala, precio, pelicula);

    if (registro_exitoso) {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";

        });
    }
}




let fecha_min = new Date();


input_inicio.min = fecha_min





const validar = () => {
    let error = false;

    if (!input_pelicula.value) {
        error = true;
    }

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

    input_hora_inicio.value = '';
    input_sala.checked = false;
    input_precio.value = '';
}
boton_enviar.addEventListener('click', validar);


let pelicula = input_pelicula.value;
let inicio = input_inicio.value;

let hora = input_hora_inicio.value;
let sala = input_sala.value;
let precio = input_precio.value;