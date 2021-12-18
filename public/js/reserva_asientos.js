'use strict';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const id_tanda = params[""];

const lista_asientos = document.querySelectorAll(".butaca");
const input_number = document.querySelector("input[type=number]");
let numero_maximo = 1;
let butacas_seleccionadas = 0;

input_number.addEventListener("change", () => {
    numero_maximo = Number(input_number.value);
    if (numero_maximo == 0) {
        numero_maximo = 1;
        input_number.value = "1";
    }

    document.querySelectorAll(".seleccion").forEach((butaca) => {
        butaca.classList.remove("seleccion");
    });
    butacas_seleccionadas = 0;
});

lista_asientos.forEach((butaca) => {
    butaca.addEventListener('click', () => {
        if (butaca.classList.contains("seleccion")) {
            butaca.classList.remove("seleccion");
            butacas_seleccionadas--;
        } else {
            if (butacas_seleccionadas < numero_maximo) {
                butaca.classList.add("seleccion");
                butacas_seleccionadas++;
            }
        }
    });
});



// const seccion_cards = document.querySelector("#seccion-asientos");

// seccion_cards.innerHTML = "";

// asientos.forEach(butaca => {
//     let card = document.createElement('div');
//     card.classList.add('butaca');

//     let numero_asiento = document.createElement('p');
//     numero_asiento.classList.add('p-numero');

//     if (!butaca.habilitado) {
//         numero_asiento.classList.add('butaca-desabilitada');
//     }

//     if (butaca.reservado) {
//         numero_asiento.classList.add('reservado');
//     }

//     numero_asiento.innerText = `${butaca.fila}${butaca.columna}`;

//     let opciones = document.createElement('div');
//     opciones.classList.add('opciones');
//     opciones.classList.add('esconder');

//     let boton_reserva = document.createElement('button');
//     boton_reserva.type = 'button';
//     boton_reserva.innerText = "Reservar asiento";

//     let boton_comprar = document.createElement('button');
//     boton_comprar.type = 'button';
//     boton_comprar.innerText = "Comprar asiento";

//     opciones.appendChild(boton_reserva);
//     opciones.appendChild(boton_comprar);

//     card.appendChild(numero_asiento);
//     card.appendChild(opciones);

//     card.addEventListener('mouseover',() => {
//         opciones.classList.remove('esconder');
//     });

//     card.addEventListener('mouseout',() => {
//         opciones.classList.add('esconder');
//     });

//     seccion_cards.appendChild(card);
// });