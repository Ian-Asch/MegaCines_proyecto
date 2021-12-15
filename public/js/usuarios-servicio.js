'use strict';

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

const generar_nombre_completo = (nombre,segundo_nombre,primer_apellido,segundo_apellido) => {
    let nombre_completo = primera_letra_mayuscula(nombre);

    if (segundo_nombre) {
        nombre_completo += ` ${primera_letra_mayuscula(segundo_nombre)}`;
    }

    nombre_completo += ` ${primera_letra_mayuscula(primer_apellido)}`;

    if (segundo_apellido) {
        nombre_completo += ` ${primera_letra_mayuscula(segundo_apellido)}`;
    }
    
    return nombre_completo;
}

const registrar_usuario = async(nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,identificacion,fecha_nacimiento,tipo_usuario,foto=null) => {
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
            nombre_completo: generar_nombre_completo(nombre,segundo_nombre,primer_apellido,segundo_apellido),
            correo: correo,
            contrasena: contrasena,
            identificacion: identificacion,
            fecha_nacimiento: fecha_nacimiento,
            edad: calcular_edad(fecha_nacimiento),
            tipo_usuario: tipo_usuario,
            foto: foto
        }
    }).then((response) => {
        if (response.data.err) {
            Swal.fire({
                'title': 'Error',
                'text': response.data.err,
                'icon': 'error'
            })
        } else {
            registro_exitoso = true;
        }
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
    }).catch((error) => {});

    return lista_usuarios;

    //Consegur el valor de este return puede ser complicado
};