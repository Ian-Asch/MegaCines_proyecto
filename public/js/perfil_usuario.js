'use strict';

let usuario = {
    nombre: "Juan",
    primer_apellido: "Oviedo",
    segundo_apellido: "Murillo",
    correo: "juan@gmail.com",
    cedula: "112354538",
    fecha_nacimiento: "5-2-1990",
    edad: 32
}

const boton_editar = document.querySelector("#boton-editar-info");
const boton_guardar = document.querySelector("#boton-guardar");

//lista de "p"s que muestran la informacion
const nombre_usuario_p = document.querySelector("#nombre-usuario");
const primer_apellido_p = document.querySelector("#primer-apellido");
const segundo_apellido_p = document.querySelector("#segundo-apellido");
const correo_p = document.querySelector("#correo-usuario");
const cedula_p = document.querySelector("#identificacion-usuario");
const fecha_nacimiento_p = document.querySelector("#fecha-nacimiento");
const edad_p = document.querySelector("#edad-usuario");
const nombre_completo = document.querySelector("#nombre-completo");

//lista de inputs
const input_nombre = document.querySelector("#input-nombre");
const input_primer_apellido = document.querySelector("#input-primer-apellido");
const input_segundo_apellido = document.querySelector("#input-segundo-apellido");
const input_correo = document.querySelector("#input-correo");
const input_cedula = document.querySelector("#input-cedula");
const input_nacimiento = document.querySelector("#input-nacimiento");


const lista_inputs = document.querySelectorAll(".info-div input");
const lista_p = document.querySelectorAll(".label-p");


const llenar_espacios = () => {
    nombre_usuario_p.innerText = usuario.nombre;
    primer_apellido_p.innerText = usuario.primer_apellido;
    segundo_apellido_p.innerText = usuario.segundo_apellido;
    correo_p.innerText = usuario.correo;
    cedula_p.innerText = usuario.cedula;
    fecha_nacimiento_p.innerText = usuario.fecha_nacimiento;
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
    input_primer_apellido.value = usuario.primer_apellido;
    input_segundo_apellido.value = usuario.segundo_apellido;
    input_correo.value = usuario.correo;
    input_cedula.value = usuario.cedula;
    input_nacimiento.value = usuario.fecha_nacimiento;

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
    if (!expresion_solo_letras.test(input_primer_apellido.value)){
        input_primer_apellido.classList.add("error");
            verfificado = false;
    }
    if (!expresion_solo_letras.test(input_segundo_apellido.value)){
        input_segundo_apellido.classList.add("error");
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
    usuario.primer_apellido = input_primer_apellido.value;
    usuario.segundo_apellido = input_segundo_apellido.value;
    usuario.correo = input_correo.value;
    usuario.cedula = input_cedula.value;
    usuario.fecha_nacimiento = input_nacimiento.value;
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