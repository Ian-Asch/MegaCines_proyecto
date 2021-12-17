// const lista_cines = document.querySelectorAll(".div-usuario");

// lista_cines.forEach((cine) => {
//     cine.addEventListener("click", () => {
//         window.location.href = "perfil_usuario_admin.html";
//     });
// });

const secc_usuarios = document.querySelector("#secc-usuarios");
const input_buscar = document.querySelector("#input-buscar");
let usuarios_lista;

const todo = async() => {
    usuarios_lista = await listar_usuarios();

    const mostrar_usuarios = (lista) => {
        secc_usuarios.innerHTML = "";

        lista.forEach((usuario) => {
            let div = document.createElement("div");
            div.classList.add("div-usuario");


            let nombre = document.createElement("h1");
            nombre.innerText = usuario.nombre_completo;

            let tipo_usuario = document.createElement("p");
            tipo_usuario.innerText = usuario.tipo_usuario;

            let boton_eliminar = document.createElement("button");
            boton_eliminar.type = "button";
            boton_eliminar.innerText = "Eliminar usuario";

            div.appendChild(nombre);
            div.appendChild(document.createElement("br"));
            div.appendChild(tipo_usuario);
            div.appendChild(document.createElement("br"));
            div.appendChild(boton_eliminar);

            secc_usuarios.appendChild(div);

            boton_eliminar.addEventListener("click", async() => {
                eliminar_usuario(usuario._id);
                Swal.fire({
                    title: "El usuario ha sido eliminado",
                    icon: "success"
                });
                usuarios_lista = await listar_usuarios();
                mostrar_usuarios(usuarios_lista);
            });
        });
    };

    mostrar_usuarios(usuarios_lista);

    input_buscar.addEventListener('keyup', () => {
        let filtro_texto = input_buscar.value
        let lista_filtrada = usuarios_lista.filter((usuario) => {
            return usuario.nombre_completo.toLowerCase().includes(filtro_texto.toLowerCase());
        })
        mostrar_usuarios(lista_filtrada);
    });
};

todo()