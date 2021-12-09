'use strict';

const registrar_pelicula = async(titulo,descripcion,anio,duracion,idioma,subtitulos,categorias=null,idioma_subtitulos=null,categoria_edad=null) => {
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
            categoria_edad: categoria_edad
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
        console.log(response.data.err);
    }
};

const listar_peliculas = async() => {
    let lista_peliculas = [];
    
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api//listar-peliculas',
        responseType: 'json'
    }).then((response) => {
        lista_peliculas = response.data.lista_peliculas;
    });

    return lista_peliculas;

    // Esta es la manera en la que se usa esta funcion:

    // let variable = await listar_peliculas();

    // De esta manera se puede agarrar el valor del return
    // Recordar usar el 'await' esto es muy importante
    // Si no se usa el await no se puede agarrar el valor del return
};