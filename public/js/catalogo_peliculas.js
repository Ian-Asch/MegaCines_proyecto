'use strict';

const barra_buscar = document.querySelector(".texto-buscar");

const secc_peliculas = document.querySelector("#sct-slideshow");

const mostrar_peliculas = (lista) => {
    secc_peliculas.innerHTML = "";

    lista.forEach((pelicula) => {
        let div_pelicula = document.createElement("div");
        div_pelicula.classList.add("div-pelicula");

        let imagen_pelicula = document.createElement("img");
        imagen_pelicula.classList.add("img-slide");
        imagen_pelicula.src = pelicula.imagen;

        let titulo_pelicula = document.createElement("h3");
        titulo_pelicula.innerText = pelicula.titulo;

        div_pelicula.appendChild(imagen_pelicula);
        div_pelicula.appendChild(titulo_pelicula);

        secc_peliculas.appendChild(div_pelicula);
    });
};

const todo = async() => {
    const peliculas_lista = await listar_peliculas();

    mostrar_peliculas(peliculas_lista);

    barra_buscar.addEventListener("keyup",() => {
        let filtro_texto = barra_buscar.value.toLowerCase();

        let lista_filtrada = peliculas_lista.filter((pelicula) => {
            return pelicula.titulo.toLowerCase().includes(filtro_texto);
        });

        mostrar_peliculas(lista_filtrada);
    });
}

todo();