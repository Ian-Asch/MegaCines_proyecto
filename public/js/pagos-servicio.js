'use strict';

const registrar_pago = async(nombre_tarjeta, numero, tipo, expiracion, cvv, nombre_dueno, direccion, provincia, postal) => {
    let response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-pago',
        responseType: 'json',
        data: {
            nombre_tarjeta: nombre_tarjeta,
            numero: numero,
            tipo: tipo,
            expiracion: expiracion,
            cvv: cvv,
            nombre_dueno: nombre_dueno,
            direccion: direccion,
            provincia: provincia,
            postal: postal
        }
    });

    if (response.data.err) {
        Swal.fire({
            title: 'Error. No se pudo registrar el metodo de pago',
            text: "Hubo un error al registrar el metodo de pago",
            icon: 'error'
        });
    } else {
        Swal.fire({
            title: "El metodo de pago se registró exitósamente",
            icon: 'success'
        });
        console.log(response.data.err);
    }
};

const listar_peliculas = async() => {
    let lista_peliculas = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api//listar-pago',
        responseType: 'json'
    }).then((response) => {
        lista_peliculas = response.data.lista_peliculas;
    });
    return lista_peliculas;
};