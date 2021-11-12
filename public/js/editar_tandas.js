'use strict';

let usuario = {
    nombre: "Spiderman Home Coming",
    fecha_Estreno: "5-2-1990",
    fecha_Retiro: "5-2-1990",
    Hora_de_Inicio: "5:00",
    Hora_de_Finalizacion: "4:00",
    Sala: "C2",
    Precio: "2000"
    
}

const boton_editar = document.querySelector("#boton-editar-info");
const boton_guardar = document.querySelector("#boton-guardar");

//lista de "p"s que muestran la informacion
const nombre_usuario_p = document.querySelector("#nombre-usuario");
const Hora_de_Inicio_p = document.querySelector("#Hora-de-Inicio");
const Hora_de_Finalizacion_p = document.querySelector("#Hora-de-Finalizacion");
const Sala_p = document.querySelector("#Sala");

const fecha_Estreno_p = document.querySelector("#fecha-Estreno");
const fecha_Retiro_p = document.querySelector("#fecha-Retiro");

const precio_p = document.querySelector("#precio");




const nombre_completo = document.querySelector("#nombre-completo");

//lista de inputs
const input_nombre = document.querySelector("#input-nombre");
const input_Hora_de_Inicio = document.querySelector("#Hora-de-Inicio");
const input_Hora_de_Finalizacion = document.querySelector("#Hora-de-Finalizacion");
const input_Sala = document.querySelector("#input-Sala");

const input_Estreno = document.querySelector("#input-Estreno");
const input_Precio = document.querySelector("#input-Precio");


const input_Retiro = document.querySelector("#input-Retiro");


const lista_inputs = document.querySelectorAll(".info-div input");
const lista_p = document.querySelectorAll(".label-p");


const llenar_espacios = () => {
    nombre_usuario_p.innerText = usuario.nombre;
    Hora_de_Inicio_p.innerText = usuario.Hora_de_Inicio;
    Hora_de_Finalizacion_p.innerText = usuario.Hora_de_Finalizacion;
    Sala_p.innerText = usuario.Sala;

    fecha_Estreno_p.innerText = usuario.fecha_Estreno;
    fecha_Retiro_p.innerText = usuario.fecha_Retiro;
    precio_p.innerText = `${usuario.Precio} ¢`

    nombre_completo.innerText = usuario.nombre;
};


const mostrar_inputs = () => {
    lista_p.forEach((element) => {
        element.classList.add("esconder");
    });

    boton_editar.classList.add("esconder");
    boton_guardar.classList.remove("esconder");

    input_nombre.value = usuario.nombre;
    input_Hora_de_Inicio.value = usuario.Hora_de_Inicio;
    input_Hora_de_Finalizacion.value = usuario.Hora_de_Finalizacion;
    input_Sala.value = usuario.Sala;

    input_Retiro.value = usuario.fecha_Retiro;
    input_Precio.value = usuario.Precio;

    input_Estreno.value = usuario.fecha_Estreno;


    lista_inputs.forEach((element) => {
        element.classList.remove("esconder");
    });
};


const mostrar_parrafos = () => {
    lista_inputs.forEach((element) => {
        element.classList.add("esconder");
    });

    boton_editar.classList.remove("esconder");
    boton_guardar.classList.add("esconder");

    llenar_espacios();

    lista_p.forEach((element) => {
        element.classList.remove("esconder");
    });
};


const verificar_espacios = () => {
   
    let verfificado = true;

    lista_inputs.forEach((element) => {
        if (element.value) {
            element.classList.remove("error");
        } else {
            element.classList.add("error");
            verfificado = false;
        }
    });


    return verfificado;
};

const guardar_cambios = () => {
    usuario.nombre = input_nombre.value;
    usuario.Hora_de_Inicio = input_Hora_de_Inicio.value;
    usuario.Hora_de_Finalizacion = input_Hora_de_Finalizacion.value;
    usuario.Sala = input_Sala.value;

    usuario.fecha_Estreno = input_Estreno.value;
    usuario.Precio = input_Precio.value;

    usuario.fecha_Retiro = input_Retiro.value;

};


llenar_espacios();

boton_editar.addEventListener('click', () => {
    mostrar_inputs()
});

boton_guardar.addEventListener('click', () => {
    if (verificar_espacios()) {

        guardar_cambios();
        mostrar_parrafos();

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor llene los espacios correctamente'
          })
    }
});