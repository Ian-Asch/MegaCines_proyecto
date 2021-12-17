const registrar_cine = async(nombre,descripcion,direccion) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-cine',
        responseType: 'json',
        data: {
            nombre: nombre,
            descripcion: descripcion,
            direccion: direccion
        }
    }).then((response) => {
        if (response.data.err) {
            Swal.fire({
                title: 'Error',
                text: response.data.err,
                icon: 'error'
            })
        } else {
            Swal.fire({
                title: 'Se registro el cine exitosamente',
                icon: 'success'
            })
        }
        console.log(response.data);
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

