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

const icono_ojo = document.querySelector("#icono-ojo")

let verfificado = true;

const funcion = (input) => {
    if (input.value) {
        input.classList.remove("error");
    } else {
        verfificado = false
        input.classList.add("error");
    }
};

// lista[5] = input


let expresion_correo = /^[a-z]+@[a-z]+\.(com|net|org|ac|cr)$/i;
let expresion_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s\d]).+$/;

const funcion_verificar_expresiones = () => {
    if (expresion_correo.test(input_correo.value)) {

    } else {
        verfificado = false
        input_correo.classList.add("error")
    }

    if (!expresion_contraseña.test(lista_inputs_requeridos[1].value)) {
        verfificado = false
        lista_inputs_requeridos[1].classList.add("error")
    }

    if (verfificado) {
        console.log(verfificado)
    }
}


const funcion_boton = () => {
    lista_inputs_requeridos.forEach(funcion)
    funcion_verificar_expresiones()
    console.log(verfificado)
    if (verfificado) {
        console.log("verificado completo")
        if (input_correo.value = "cliente@MegaCines.com") {
            window.location.href = "perfil_usuario_cliente.html"
        }
        if (input_correo.value = "admin@MegaCines.com") {
            window.location.href = "perfil_usuario_admin.html"
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor llene los espacios correctamente'
        });
    }
}



boton_ingresar.addEventListener("click",funcion_boton);

icono_ojo.addEventListener("click",() => {
    if (lista_inputs_requeridos[1].type === "password") {
        lista_inputs_requeridos[1].type = "text";
    } else {
        lista_inputs_requeridos[1].type = "password";
    }
})

