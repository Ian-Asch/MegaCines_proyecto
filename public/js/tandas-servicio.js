  'use strict';

  const registrar_tanda = async(inicio, hora, sala, precio, pelicula) => {
      let registro_exitoso = false;

      let response = await axios({
          method: 'post',
          url: 'http://localhost:3000/api/registrar-tanda',
          responseType: 'json',
          data: {
              inicio: inicio,

              hora: hora,
              sala: sala,
              precio: precio,
              pelicula: pelicula
          }
      });
      console.log(response.data)
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

  const conseguir_tandas_pelicula = async(pelicula) => {
      let lista_tandas = await listar_tandas();

      let lista_filtrada = lista_tandas.filter((tanda) => {
          return tanda.pelicula == pelicula;
      });

      return lista_filtrada
  };

  const eliminar_tanda = async(id_tanda) => {
      await axios({
          method: 'delete',
          url: 'http://localhost:3000/api/eliminar-tanda',
          responseType: 'json',
          data: { id: id_tanda }
      });
  };