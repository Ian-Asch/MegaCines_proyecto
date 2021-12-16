'use strict';

const registrar_pelicula = async(titulo,descripcion,anio,duracion,idioma,subtitulos,categorias=null,idioma_subtitulos=null,categoria_edad=null,imagen=null) => {
    let registro_exitoso = false;
    
    let response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-pelicula',
        responseType: 'json',
        data: {
            titulo: titulo,
            descripcion: descripcion,
            ano: anio,
            duracion: duracion,
            categorias: categorias,
            idioma: idioma,
            subtitulos: subtitulos,
            idioma_subtitulos: idioma_subtitulos,
            categoria_edad: categoria_edad,
            imagen: imagen
        }
    });

    if (response.data.err) {
        Swal.fire({
            title: 'Error. No se pudo registrar la pelicula',
            text: "Hubo un error al registrar la pelicula",
            icon: 'error'
        });
    } else {
        Swal.fire({
            title: "La pelicula se registro exitosamente",
            icon: 'success'
        });
        registro_exitoso = true;
    }

    return registro_exitoso;
};

const listar_peliculas = async() => {
    let lista_peliculas = [];
    
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-peliculas',
        responseType: 'json'
    }).then((response) => {
        lista_peliculas = response.data.lista_peliculas;
    });

    return lista_peliculas;
};

const conseguir_pelicula = async(titulo_pelicula) => {
    await axios({
        method: "get",
        url: 'http://localhost:3000/api/buscar-pelicula',
        responseType: "json",
        params: {titulo: titulo_pelicula}
    }).then((response) => {
        console.log(response.data.pelicula);
    });
};

const eliminar_pelicula = async(id_pelicula) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-pelicula',
        responseType: 'json',
        data: { id: id_pelicula }
    });
};