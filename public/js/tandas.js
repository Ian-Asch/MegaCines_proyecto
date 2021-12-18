'use strict';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const nombre_pelicula = params[""];

const tabla = document.querySelector("tbody");

const todo = async() => {
    let lista_tandas_pelicula = await conseguir_tandas_pelicula(nombre_pelicula);

    lista_tandas_pelicula.forEach((tanda) => {
        let row = tabla.insertRow();

        let inicio = row.insertCell();
        inicio.innerText = tanda.inicio;

        // let finalizacion = row.insertCell();
        // finalizacion.innerText = tanda.finalizacion;

        let hora = row.insertCell();
        hora.innerText = tanda.hora;

        let sala = row.insertCell();
        sala.innerText = tanda.sala;

        let precio = row.insertCell();
        precio.innerText = tanda.precio

        row.addEventListener("click", () => {
            window.location.href = `reserva_asientos.html?=${tanda._id}`;
        });
    });
};

todo();