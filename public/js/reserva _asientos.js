'use strict';

const seccion_cards = document.querySelector("#seccion-asientos");

seccion_cards.innerHTML = "";

asientos.forEach(butaca => {
    let card = document.createElement('div');
    card.classList.add('butaca');

    let numero_asiento = document.createElement('p');
    numero_asiento.classList.add('p-numero');

    if (!butaca.habilitado) {
        numero_asiento.classList.add('butaca-desabilitada');
    }

    if (butaca.reservado) {
        numero_asiento.classList.add('reservado');
    }

    numero_asiento.innerText = `${butaca.fila}${butaca.columna}`;

    let opciones = document.createElement('div');
    opciones.classList.add('opciones');
    opciones.classList.add('esconder');

    let boton_reserva = document.createElement('button');
    boton_reserva.type = 'button';
    boton_reserva.innerText = "Reservar asiento";

    let boton_comprar = document.createElement('button');
    boton_comprar.type = 'button';
    boton_comprar.innerText = "Comprar asiento";

    opciones.appendChild(boton_reserva);
    opciones.appendChild(boton_comprar);

    card.appendChild(numero_asiento);
    card.appendChild(opciones);
    
    card.addEventListener('mouseover',() => {
        opciones.classList.remove('esconder');
    });

    card.addEventListener('mouseout',() => {
        opciones.classList.add('esconder');
    });

    seccion_cards.appendChild(card);
});