  'use strict';

const registrar_tanda = async(pelicula,fecha_inicio,sala,cine,precio,duracion) => {
    let registro_exitoso = false;

    let response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-tanda',
        responseType: 'json',
        data:{
            pelicula: pelicula,
            fecha: fecha_inicio,
            sala: sala,
            cine: cine,
            precio: precio,
            duracion: duracion
        }
    });

    if (response.data.err) {
        Swal.fire({
            title: "No se pudo registrar la tanda",
            icon: 'error',
            text: response.err
        })
    } else {
        Swal.fire({
            title: "La tanda se registro correctamente",
            icon: 'success'
        })
        registro_exitoso = true;
    }

    return registro_exitoso;
};
const listar_tandas = async() => {
    let lista_tandas = [];
    
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-tandas',
        responseType: 'json'
    }).then((response) => {
        lista_tandas = response.data.lista_tandas;
    }).catch((error) => {});

    return lista_tandas;

    //Consegur el valor de este return puede ser complicado
};