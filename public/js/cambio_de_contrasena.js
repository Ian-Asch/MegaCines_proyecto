const input_correo = document.querySelector("#contenedor-input input");
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

btn_contrasena.addEventListener("click",() => {
  if (verificar_correo()) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Un correo de cambio de contraseña ha sido enviado a tu cuenta',
      showConfirmButton: false,
      timer: 2500
    })
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Por favor llene los espacios correctamente',
      showConfirmButton: false,
      timer: 2000
    })
  }
})

