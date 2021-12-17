'use strict';

const barra_buscar = document.querySelector("#input-buscar");
const secc_cines = document.querySelector("#secc-cines");

let lista_cines;

const mostrar_cines = (lista) => {
    secc_cines.innerHTML = "";

    lista.forEach((cine) => {
        let div_cine = document.createElement("div");
        div_cine.classList.add("listar");

        let titulo = document.createElement("h1");
        titulo.innerText = cine.nombre;

        let imagen = document.createElement("img");
        imagen.src = cine.imagen;

        let descripcion = document.createElement("p");
        descripcion.innerText = "Descripcion: ";
        let span_desc = document.createElement("span");
        span_desc.innerText = cine.descripcion;
        descripcion.appendChild(span_desc);

        let ubicacion = document.createElement("p");
        ubicacion.innerText = "Ubicacion: ";
        let span_ubica = document.createElement("span");
        span_ubica.innerText = cine.direccion;
        ubicacion.appendChild(span_ubica);

        let boton_editar = document.createElement("button");
        boton_editar.type = "button";
        boton_editar.innerText = "Editar";

        let boton_eliminar = document.createElement("button");
        boton_eliminar.type = "button";
        boton_eliminar.innerText = "Eliminar";

        div_cine.appendChild(imagen);
        div_cine.appendChild(titulo);
        div_cine.appendChild(document.createElement("br"));
        div_cine.appendChild(descripcion);
        div_cine.appendChild(ubicacion);
        div_cine.appendChild(boton_editar);
        div_cine.appendChild(boton_eliminar);

        secc_cines.appendChild(div_cine);

        boton_editar.addEventListener("click",() => {
            window.location.href = `editar_cadena.html`;
        });

        boton_eliminar.addEventListener("click",async() => {
            eliminar_cine(cine._id);
            Swal.fire({
                title: "Se elimino el cine",
                text: "La cadena de cine se elimino exitosamente",
                icon: "success"
            });
            lista_cines = await listar_cines();
            mostrar_cines(lista_cines);
        });
    });
};

const todo = async() => {
    lista_cines = await listar_cines();

    mostrar_cines(lista_cines);

    barra_buscar.addEventListener("keyup",() => {
        let filtro_texto = barra_buscar.value.toLowerCase();

        let lista_filtrada = lista_cines.filter((cine) => {
            return cine.nombre.toLowerCase().includes(filtro_texto);
        });

        mostrar_cines(lista_filtrada);
    })
};

todo();