'use strict';

const tabla = document.querySelector("tbody");



const boton_registrar_tandas = document.querySelector(".boton-registrar-tanda")

const registrar_tandas = () => {
    window.location.href = "registrar-tanda.html";
};

boton_registrar_tandas.addEventListener("click",registrar_tandas);



const mostarar_tandas_todo = async() => {
    let lista_tandas = await listar_tandas();

    tabla.innerHTML = "";

    lista_tandas.forEach((tanda) => {
        let table_row = document.createElement("tr");

        let td_nombre_pelicula = document.createElement("td");
        td_nombre_pelicula.innerText = tanda.pelicula;

        let td_fecha_inicio = document.createElement("td");
        td_fecha_inicio.innerText = tanda.inicio

        let td_fecha_finalizacion = document.createElement("td");
        td_fecha_finalizacion.innerText = tanda.finalizacion;

        let td_hora = document.createElement("td");
        td_hora.innerText = tanda.hora;

        let td_sala = document.createElement("td");
        td_sala.innerText = tanda.sala

        let td_precio = document.createElement("td");
        td_precio.innerText = tanda.precio

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

        table_row.appendChild(td_nombre_pelicula);
        table_row.appendChild(td_fecha_inicio);
        // table_row.appendChild(td_fecha_finalizacion);
        table_row.appendChild(td_hora);
        table_row.appendChild(td_sala);
        table_row.appendChild(td_precio);
        table_row.appendChild(td_btn_editar);
        table_row.appendChild(td_btn_eliminar);

        tabla.appendChild(table_row);

        boton_editar.addEventListener("click",() => {
            localStorage.setItem("tanda-seleccionada",JSON.stringify(tanda))
            window.location.href = "editar-tandas.html"
        });

        boton_eliminar.addEventListener("click",() => {
            eliminar_tanda(tanda._id)

            Swal.fire({
                title: "Se elimino la tanda",
                icon: "success"
            })

            mostarar_tandas_todo()
        });
    });
}

mostarar_tandas_todo();