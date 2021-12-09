'use strict';

const lista_peliculas = document.querySelectorAll("tbody tr");

lista_peliculas.forEach((table_row) => {
    table_row.addEventListener("click",() => {
        window.location.href = "reserva_asientos.html";
    });
});