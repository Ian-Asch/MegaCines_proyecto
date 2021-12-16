  'use strict';

const registrar_tanda = async(inicio,finalizacion,hora,sala,precio,pelicula) => {
    let registro_exitoso = false;

    let response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-tanda',
        responseType: 'json',
        data:{
            inicio: inicio,
            finalizacion: finalizacion,
            hora: hora,
            sala: sala,
            precio: precio,
            pelicula: pelicula
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

const eliminar_tanda = async(id_tanda) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-tanda',
        responseType: 'json',
        data: { id: id_tanda }
    });
};