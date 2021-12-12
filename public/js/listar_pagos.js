'use strict';

const tabla = document.querySelector("tbody");



const boton_registrar_tandas = document.querySelector(".boton-registrar-tanda")

const registrar_tandas = () => {
    window.location.href = "registrar-tanda.html";
};

boton_registrar_tandas.addEventListener("click", registrar_tandas);



const mostarar_tandas_todo = async() => {
    let lista_tandas = await listar_tandas();

    lista_tandas.forEach((tanda) => {
        let table_row = document.createElement("tr");

        let td_nombre_pelicula = document.createElement("td");
        td_nombre_pelicula.innerText = tanda.pelicula;

        let td_fecha = document.createElement("td");
        td_fecha.innerText = tanda.fecha

        let td_sala = document.createElement("td");
        td_sala.innerText = tanda.sala

        let td_cine = document.createElement("td");
        td_cine.innerText = tanda.cine

        let td_btn_editar = document.createElement("td");
        let boton_editar = document.createElement("button");
        boton_editar.type = "button";
        boton_editar.innerText = "Editar";

        td_btn_editar.appendChild(boton_editar)

        let td_btn_eliminar = document.createElement("td");
        let boton_eliminar = document.createElement("button");
        boton_eliminar.type = "button";
        boton_eliminar.innerText = "Eliminar";

        td_btn_eliminar.appendChild(boton_eliminar)

        table_row.appendChild(td_nombre_pelicula)
        table_row.appendChild(td_fecha)
        table_row.appendChild(td_sala)
        table_row.appendChild(td_cine)
        table_row.appendChild(td_btn_editar)
        table_row.appendChild(td_btn_eliminar)

        tabla.appendChild(table_row);

        boton_editar.addEventListener("click", () => {
            localStorage.setItem("tanda-seleccionada", JSON.stringify(tanda))
            window.location.href = "editar-tandas.html"
        });


        // new Date(tanda.fecha).getFullYear();
        // new Date(tanda.fecha).getMonth();
        // new Date(tanda.fecha).getDay();
    });
}

mostarar_tandas_todo()