const registrar_cine = async(nombre,descripcion,direccion,imagen=null) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-cine',
        responseType: 'json',
        data: {
            nombre: nombre,
            descripcion: descripcion,
            direccion: direccion,
            imagen: imagen
        }
    }).then((response) => {
        if (response.data.err) {
            Swal.fire({
                title: 'Error',
                text: "No se pudo registrar el cine",
                icon: 'error'
            })
            console.log(response.data)
        } else {
            Swal.fire({
                title: 'Se registro el cine exitosamente',
                icon: 'success'
            })
        }
    });
};

const conseguir_cine = async(id_cine) => {
    let response = await axios({
        method: "get",
        url: 'http://localhost:3000/api/buscar-cine',
        responseType: "json",
        params: {id: id_cine}
    });

    return response.data.cine;
};

const listar_cines = async() => {
    let lista_cines = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-cines',
        responseType: 'json'
    }).then((response) => {
        lista_cines = response.data.lista_cines;
    });

    return lista_cines;
};

const eliminar_cine = async(id_cine) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-cine',
        responseType: 'json',
        data: { id: id_cine }
    });
};