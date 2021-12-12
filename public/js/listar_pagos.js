'use strict';

const secc_usuarios = document.querySelector("#secc-usuarios");
const input_buscar = document.querySelector("#input-buscar");


const todo = async() => {
    const usuarios_lista = await listar_usuarios();

    const mostrar_usuarios = (lista) => {
        secc_usuarios.innerHTML = "";

        lista.forEach((usuario) => {
            let div = document.createElement("div");
            div.classList.add("div-usuario");

            let nombre = document.createElement("h1");
            nombre.innerText = `${usuario.nombre} ${usuario.primer_apellido} ${usuario.segundo_apellido}`;

            let tipo_usuario = document.createElement("p");
            tipo_usuario.innerText = usuario.tipo_usuario;

            div.appendChild(nombre);
            div.appendChild(document.createElement("br"));
            div.appendChild(tipo_usuario);

            // div.addEventListener("click",() => {window.location.href = ""})

            secc_usuarios.appendChild(div);
        });
    };

    mostrar_usuarios(usuarios_lista);

    input_buscar.addEventListener('keyup', () => {
        let filtro_texto = input_buscar.value
        let lista_filtrada = usuarios_lista.filter((usuario) => {
            return usuario.nombre.toLowerCase().includes(filtro_texto.toLowerCase());
        })
        mostrar_usuarios(lista_filtrada);
    });
};

todo()