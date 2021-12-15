'use strict';

const lista_metodos = document.querySelector("#sct-lista-metodo-pago");
const agregar_pago = document.querySelector("#agregar-pago-sect");
const agregar_pago_sect2 = document.querySelector("#agregar-pago-sect2");
const buscar_pagos = document.querySelector("#buscar-pagos");


const todo = async() => {
    const pagos_lista = await listar_pagos();

    const mostrar_usuarios = (lista) => {
        lista_metodos.innerHTML = "";

        lista.forEach((usuario) => {
            let div = document.createElement("div");
            div.classList.add("div-pago");

            let nombre = document.createElement("h1");
            nombre.innerText = `${pago.nombre} ${pago.primer_apellido} ${pago.segundo_apellido}`;

            let tipo_usuario = document.createElement("p");
            tipo_usuario.innerText = usuario.tipo_usuario;

            div.appendChild(nombre);
            div.appendChild(document.createElement("br"));
            div.appendChild(tipo_usuario);

            // div.addEventListener("click",() => {window.location.href = ""})

            lista_metodos.appendChild(div);
        });
    };

    mostrar_usuarios(pagos_lista);

    buscar_pagos.addEventListener('keyup', () => {
        let filtro_texto = buscar_pagos.value
        let lista_filtrada = pagos_lista.filter((pago) => {
            return pago.nombre.toLowerCase().includes(filtro_texto.toLowerCase());
        })
        mostrar_usuarios(lista_filtrada);
    });
};

todo()