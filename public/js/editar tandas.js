'use strict';

let usuario = {
    nombre: "Spiderman Home Coming",
    fecha_Estreno: "5-2-1990",
    fecha_Retiro: "5-2-1990",
    Hora_de_Inicio: "5:00",
    Hora_de_Finalizacion: "4:00",
    correo: "juan@gmail.com",
    cedula: "112354538",

    edad: 32
}

const boton_editar = document.querySelector("#boton-editar-info");
const boton_guardar = document.querySelector("#boton-guardar");

//lista de "p"s que muestran la informacion
const nombre_usuario_p = document.querySelector("#nombre-usuario");
const Hora_de_Inicio_p = document.querySelector("#Hora-de-Inicio");
const Hora_de_Finalizacion_p = document.querySelector("#Hora-de-Finalizacion");
const correo_p = document.querySelector("#correo-usuario");
const cedula_p = document.querySelector("#identificacion-usuario");

const fecha_Estreno_p = document.querySelector("#fecha-Estreno");
const fecha_Retiro_p = document.querySelector("#fecha-Retiro");



const edad_p = document.querySelector("#edad-usuario");
const nombre_completo = document.querySelector("#nombre-completo");

//lista de inputs
const input_nombre = document.querySelector("#input-nombre");
const input_Hora_de_Inicio = document.querySelector("#Hora-de-Inicio");
const input_Hora_de_Finalizacion = document.querySelector("#Hora-de-Finalizacion");
const input_correo = document.querySelector("#input-correo");
const input_cedula = document.querySelector("#input-cedula");

const input_Estreno = document.querySelector("#input-Estreno");
const input_Retiro = document.querySelector("#input-Retiro");


const lista_inputs = document.querySelectorAll(".info-div input");
const lista_p = document.querySelectorAll(".label-p");


const llenar_espacios = () => {
    nombre_usuario_p.innerText = usuario.nombre;
    Hora_de_Inicio_p.innerText = usuario.primer_apellido;
    Hora_de_Finalizacion_p.innerText = usuario.segundo_apellido;
    correo_p.innerText = usuario.correo;
    cedula_p.innerText = usuario.cedula;

    fecha_Estreno_p.innerText = usuario.fecha_Estreno;
    fecha_Retiro_p.innerText = usuario.fecha_Retiro;


    edad_p.innerText = usuario.edad;
    nombre_completo.innerText = `${usuario.nombre} ${usuario.primer_apellido} ${usuario.segundo_apellido}`;
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
    input_correo.value = usuario.correo;
    input_cedula.value = usuario.cedula;

    input_Retiro.value = usuario.fecha_Retiro;
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
    let expresion_correo = /^[a-z]+@[a-z]+\.(com|net|org|ac|cr)$/i;
    // let expresion_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s\d]).+$/;
    let expresion_solo_letras = /^[a-z\s]+$/i;
    let expresion_cedula = /^\d{9,12}$/;
    
    let verfificado = true;

    lista_inputs.forEach((element) => {
        if (element.value) {
            element.classList.remove("error");
        } else {
            element.classList.add("error");
            verfificado = false;
        }
    });


    if (!expresion_solo_letras.test(input_nombre.value)){
        input_nombre.classList.add("error");
            verfificado = false;
    }

    if (!expresion_correo.test(input_correo.value)) {
        input_correo.classList.add("error");
            verfificado = false;
    }

    if (!expresion_cedula.test(input_cedula.value)) {
        input_cedula.classList.add("error");
            verfificado = false;
    }

    return verfificado;
};

const guardar_cambios = () => {
    usuario.nombre = input_nombre.value;
    usuario.Hora_de_Inicio = input_Hora_de_Inicio.value;
    usuario.Hora_de_Finalizacion = input_Hora_de_Finalizacion.value;
    usuario.correo = input_correo.value;
    usuario.cedula = input_cedula.value;

    usuario.fecha_Estreno = input_Estreno.value;
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