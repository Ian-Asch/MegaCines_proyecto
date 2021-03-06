//Implementar el modo estricto en todos los JS
'use strict';

//Referencia de los campos HTMLs. (Elementos como tal, no su valor)

// const input_nombre = document.querySelector('#txt-usuario');
// const input_contrasenna = document.querySelector('#txt-contrasenna');
// const boton_ingresar = document.querySelector('#btn-ingresar');

// const obtenerDatos = () => {
//     console.log(`El nombre es ${input_nombre.value}`);
//     console.log(`La contraseña es: ${input_contrasenna.value}`);
// };

// boton_ingresar.addEventListener('click', obtenerDatos);


const lista_inputs_requeridos = document.querySelectorAll("[required]");
const boton_ingresar = document.querySelector("#btn-ingresar");
const input_correo = document.querySelector("#email");

const icono_ojo_esconder = document.querySelector("#icono-ojo-esconder");
const icono_ojo_mostrar = document.querySelector("#icono-ojo-mostrar");

let verificado = true;

const funcion = (input) => {
    if (input.value) {
        input.classList.remove("error");
    } else {
        verificado = false
        input.classList.add("error");
    }
};

// lista[5] = input


let expresion_correo = /^[a-z]+@[a-z]+\.(com|net|org|ac|cr)$/i;
let expresion_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s\d]).{8,15}$/;

const funcion_verificar_expresiones = () => {
    if (expresion_correo.test(input_correo.value)) {

    } else {
        verificado = false
        input_correo.classList.add("error")
    }

    if (!expresion_contraseña.test(lista_inputs_requeridos[1].value)) {
        verificado = false
        lista_inputs_requeridos[1].classList.add("error")
    }
}


const funcion_boton = () => {
    verificado = true;
    
    lista_inputs_requeridos.forEach(funcion)
    funcion_verificar_expresiones()
    if (verificado) {
        iniciar_sesion(lista_inputs_requeridos[0].value,lista_inputs_requeridos[1].value);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor llene los espacios correctamente'
        });
    }
}



boton_ingresar.addEventListener("click", funcion_boton);

icono_ojo_esconder.addEventListener("click", () => {
    lista_inputs_requeridos[1].type = "text";
    icono_ojo_mostrar.classList.remove("esconder");
    icono_ojo_esconder.classList.add("esconder");
})
icono_ojo_mostrar.addEventListener("click", () => {
    lista_inputs_requeridos[1].type = "password";
    icono_ojo_mostrar.classList.add("esconder");
    icono_ojo_esconder.classList.remove("esconder");
})