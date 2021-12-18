'use strict';

const secc_peliculas = document.querySelector("#secc-peliculas");

const barra_buscar = document.querySelector("#barra-buscar");

let peliculas_lista;

const mostrar_peliculas = (lista) => {
    secc_peliculas.innerHTML = "";

    lista.forEach((pelicula) => {
        let div_pelicula = document.createElement("div");
        div_pelicula.classList.add("listar")

        let titulo_pelicula = document.createElement("h1");
        titulo_pelicula.innerText = pelicula.titulo;

        let imagen_pelicula = document.createElement("img");
        imagen_pelicula.src = pelicula.imagen;

        let descripcion_p = document.createElement("p");
        descripcion_p.innerText = "Descripción: ";
        let des_span = document.createElement("span");
        des_span.innerText = pelicula.descripcion;
        descripcion_p.appendChild(des_span);

        let boton_editar = document.createElement("button");
        boton_editar.type = "button";
        boton_editar.innerText = "Editar";

        let boton_eliminar = document.createElement("button");
        boton_eliminar.type = "button";
        boton_eliminar.innerText = "Eliminar";

        div_pelicula.appendChild(titulo_pelicula);
        div_pelicula.appendChild(document.createElement("br"));
        div_pelicula.appendChild(imagen_pelicula);
        div_pelicula.appendChild(descripcion_p);
        div_pelicula.appendChild(document.createElement("br"));
        div_pelicula.appendChild(boton_editar);
        div_pelicula.appendChild(boton_eliminar);

        secc_peliculas.appendChild(div_pelicula);

        boton_editar.addEventListener("click", () => {
            window.location.href = `editar_pelicula.html`;
        })

        boton_eliminar.addEventListener("click", async() => {
            eliminar_pelicula(pelicula._id);
            Swal.fire({
                title: "Se elimino la pelicula",
                text: "La pelicula se elimino exitosamente",
                icon: "success"
            });
            peliculas_lista = await listar_peliculas();
            mostrar_peliculas(peliculas_lista);
        });
    });
};

const todo = async() => {
    peliculas_lista = await listar_peliculas();

    mostrar_peliculas(peliculas_lista);

    barra_buscar.addEventListener("keyup", () => {
        let filtro_texto = barra_buscar.value.toLowerCase();

        let lista_filtrada = peliculas_lista.filter((pelicula) => {
            return pelicula.titulo.toLowerCase().includes(filtro_texto);
        });

        mostrar_peliculas(lista_filtrada);
    })
};

todo();