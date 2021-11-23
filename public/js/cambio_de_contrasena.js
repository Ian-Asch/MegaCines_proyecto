const input_correo = document.querySelector("#txt_email");
const btn_contrasena = document.querySelector("#btn-ingresar")

let verfificado = true

const verificar_correo = () => {
    let expresion_correo = /^[a-z]+@[a-z]+\.(com|net|org|ac|cr)$/i;

    if (!expresion_correo.test(input_correo.value)) {
        input_correo.classList.add("error");
        verfificado = false;
    } else {
        input_correo.classList.remove("error");
        verfificado = true;
    }

    return verfificado
}

btn_contrasena.addEventListener("click", () => {
    if (verificar_correo()) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha enviado un correo de recuperación de contraseña',
            showConfirmButton: true,

        }).then(() => {
            history.back();
        });
    } else {
        Swal.fire({
            // position: 'center',
            icon: 'error',
            title: 'No ha ingresado un correo electrónico válido'
        })
    }
})