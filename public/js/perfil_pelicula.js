'use strict';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const nombre_pelicula = params[""];
let pelicula;

const contenedor_imagen = document.querySelector("#imagen-pelicula");
const pelicula_titulo = document.querySelector("#titulo-pelicula");
const descripcion_pelicula = document.querySelector("#descripcion-pelicula");
const duracion_pelicula = document.querySelector("#duracion-pelicula");
const anio_pelicula = document.querySelector("#anio-pelicula");
const categorias_pelicula = document.querySelector("#categoria-pelicula");
const idioma_pelicula = document.querySelector("#idioma-pelicula");
const subtitulos_pelicula = document.querySelector("#subtitulos-pelicula");
const clasificacion_edad = document.querySelector("#categoria-edad");

const secc_tandas = document.querySelector("#secc-tandas");

const boton_reservar = document.querySelector("#boton-reservar");

const todo = async() => {
    pelicula = await conseguir_pelicula(nombre_pelicula);

    contenedor_imagen.src = pelicula.imagen;
    pelicula_titulo.innerText = pelicula.titulo;
    descripcion_pelicula.innerText = pelicula.descripcion;
    duracion_pelicula.innerText = pelicula.duracion;
    anio_pelicula.innerText = pelicula.ano;
    pelicula.categorias.forEach((categoria) => {
        categorias_pelicula.innerText += categoria;
    });
    idioma_pelicula.innerText = pelicula.idioma;
    if (pelicula.subtitulos) {
        subtitulos_pelicula.innerText = pelicula.idioma_subtitulos;
    } else {
        subtitulos_pelicula.innerText = "N/A"
    }
    clasificacion_edad.innerText = pelicula.categoria_edad;

    let lista_tandas_pelicula = await conseguir_tandas_pelicula(nombre_pelicula);

    if (lista_tandas_pelicula.length) {
        for(let i = 0; i < 5; i++) {
            let div_tanda = document.createElement("div");
            div_tanda.classList.add("tanda");
    
            let hora = document.createElement("p");
            hora.classList.add("label-p");
            hora.innerText = lista_tandas_pelicula[i].hora;
    
            let sala = document.createElement("p");
            sala.classList.add("label-p");
            sala.innerText = lista_tandas_pelicula[i].sala;
    
            let precio = document.createElement("p");
            precio.classList.add("label-p");
            precio.innerText = lista_tandas_pelicula[i].precio;
    
            div_tanda.appendChild(hora);
            div_tanda.appendChild(sala);
            div_tanda.appendChild(precio);
    
            secc_tandas.appendChild(div_tanda);
    
            div_tanda.addEventListener("click",() => {
                window.location.href = `reserva_asientos.html?=${lista_tandas_pelicula[i]._id}`;
            })
        }
    } else {
        let parrafo = document.createElement("p");
        parrafo.innerText = "No hay tandas registradas";

        secc_tandas.appendChild(parrafo);
    }
}

todo()

boton_reservar.addEventListener("click",() => {
    window.location.href = `tandas.html?=${nombre_pelicula}`;
});