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

const registrar_usuario = async(nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,identificacion,fecha_nacimiento,tipo_usuario) => {
    let registro_exitoso = false;
    
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data:{
            nombre: nombre,
            segundo_nombre: segundo_nombre,
            primer_apellido: primer_apellido,
            segundo_apellido: segundo_apellido,
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