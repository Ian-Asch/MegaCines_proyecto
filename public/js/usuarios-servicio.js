'use strict';

const primera_letra_mayuscula = (palabra) => {
    let nueva_palabra = "";
    let letra;

    for(let i = 0; i < palabra.length; i++) {
        if (i == 0) {
            letra = palabra[i].toUpperCase();
        } else {
            letra = palabra[i].toLowerCase();
        }

        nueva_palabra += letra;
    }

    return nueva_palabra;
};

const calcular_edad = (fecha_nacimiento) => {
    let edad;

    if (typeof fecha_nacimiento == "string") {
        fecha_nacimiento = new Date(fecha_nacimiento);
    }

    let anio_actual = new Date().getFullYear();
    let mes_actual = new Date().getMonth();
    let dia_actual = new Date().getDay();
    
    let anio_nacimiento = fecha_nacimiento.getFullYear();
    let mes_nacimiento = fecha_nacimiento.getMonth();
    let dia_nacimiento = fecha_nacimiento.getDay();

    edad = anio_actual - anio_nacimiento - 1;

    if (mes_actual > mes_nacimiento) {
        edad++;
    } else {
        if (mes_actual == mes_nacimiento) {
            if (dia_actual >= dia_nacimiento) {
                edad++;
            }
        }
    }

    return edad;
};

const registrar_usuario = async(nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,identificacion,fecha_nacimiento,tipo_usuario) => {
    let registro_exitoso = false;
    
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data:{
            nombre: primera_letra_mayuscula(nombre),
            segundo_nombre: primera_letra_mayuscula(segundo_nombre),
            primer_apellido: primera_letra_mayuscula(primer_apellido),
            segundo_apellido: primera_letra_mayuscula(segundo_apellido),
            correo: correo,
            contrasena: contrasena,
            identificacion: identificacion,
            fecha_nacimiento: fecha_nacimiento,
            edad: calcular_edad(fecha_nacimiento),
            tipo_usuario: tipo_usuario
        }
    }).then((response) => {
        Swal.fire({
            title: "El usuario se registro correctamente",
            icon: 'success'
        })
        registro_exitoso = true;
    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'text': response.err,
            'icon': 'error'
        })
    });

    return registro_exitoso;
};

const iniciar_sesion = async(correo, contrasena) => {
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/iniciar-sesion',
        responseType: 'json',
        params: {correo: correo, contrasena: contrasena}
    }).then((response) => {
        if (response.data.error) {
            Swal.fire({
                'title': "Error",
                'text': response.data.msj,
                'icon': "error"
            });
        } else {
            // El usuario inicia sesion
            localStorage.setItem('info-usuario',JSON.stringify(response.data))
            if (response.data.tipo_usuario == "cliente") {
                window.location.href = "pagina-principal-cliente.html";
            }
            if (response.data.tipo_usuario == "soporte") {
                window.location.href = "pagina-configuracion-soporte.html";
            }
            if (response.data.tipo_usuario == "admin") {
                window.location.href = "pagina-configuracion-admin.html";
            }
        }
    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'text': response.err,
            'icon': 'error'
        })
    });
};

const modificar_usuario = async(info_usuario) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-usuario',
        responseType: 'json',
        data: info_usuario
    }).then((response) => {
        Swal.fire({
            'title': 'El usuario se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        })
        localStorage.setItem("info-usuario",JSON.stringify(info_usuario));
    }).catch((error) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });
};

const listar_usuarios = async() => {
    let lista_usuarios = [];
    
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuarios',
        responseType: 'json'
    }).then((response) => {
        lista_usuarios = response.data.lista_usuarios;
    })

    return lista_usuarios;

    // Esta es la manera en la que se usa esta funcion:

    // let variable = await listar_usuarios();

    // De esta manera se puede agarrar el valor del return
    // Recordar usar el 'await' esto es muy importante
    // Si no se usa el await no se puede agarrar el valor del return
};