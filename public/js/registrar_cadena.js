'use strict';

const codigo = document.querySelector("#txt_codigo");
const cadena = document.querySelector("#txt_cadena");
const registrar = document.querySelector("#btn-registrar");

const obtenerDatos = () => {

    Swal.fire({
        icon: 'success',
        title: 'Cadena agregada exitosamente '

    }).then(() => {
        limpiar_pantalla();
    });

}

const limpiar_pantalla = () => {
    codigo.value = '';
    cadena.value = '';

}

const validar = () => {

    let expReg_codigo = /^[0-9]+$/i;
    let expReg_cadena = /^[a-z]+$/i;
    let error = false;


    if (codigo.value == "" || !expReg_codigo.test(codigo.value)) {
        error = true;
        codigo.classList.add("error-input");

    } else {
        codigo.classList.remove("error-input");
        console.log("El codigo de la cadena es:" + codigo.value);
    }

    if (cadena.value == "" || !expReg_cadena.test(cadena.value)) {
        error = true;
        cadena.classList.add("error-input");

    } else {
        cadena.classList.remove("error-input");
        console.log("El nombre de la cadena es:" + cadena.value);
    }

    if (error == false) {

    } else {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor ingrese la información requerida'
        })
    }

    let provincia1 = true;
    let provincia2 = true;
    let provincia3 = true;
    let provincia4 = true;
    let provincia5 = true;
    let provincia6 = true;
    let provincia7 = true;

    let asciento1 = true;
    let asciento2 = true;
    let asciento3 = true;

    let categoria1 = true;
    let categoria2 = true;
    let categoria3 = true;
    let categoria4 = true;
    let categoria5 = true;
    let categoria6 = true;

    let tipo1 = true;
    let tipo2 = true;
    let tipo3 = true;
    let tipo4 = true;
    let tipo5 = true;

    let ganancia1 = true;
    let ganancia2 = true;
    let ganancia3 = true;
    let ganancia4 = true;
    let ganancia5 = true;

    if (document.getElementById('sanjose').checked) {

        console.log("Ubicacion de cadena seleccionada: San José");

    } else {
        provincia1 = false;
    }

    if (document.getElementById('heredia').checked) {

        console.log("Ubicacion de cadena seleccionada: Heredia");
    } else {
        provincia2 = false;
    }
    if (document.getElementById('cartago').checked) {
        console.log("Ubicacion de cadena seleccionada: Cartago");
    } else {
        provincia3 = false;
    }
    if (document.getElementById('alajuela').checked) {
        console.log("Ubicacion de cadena seleccionada: Alajuela");
    } else {
        provincia4 = false;
    }
    if (document.getElementById('limon').checked) {
        console.log("Ubicacion de cadena seleccionada: Limon");
    } else {
        provincia5 = false;
    }
    if (document.getElementById('guanacaste').checked) {
        console.log("Ubicacion de cadena seleccionada: Guanacaste");
    } else {
        provincia6 = false;
    }
    if (document.getElementById('puntarenas').checked) {
        console.log("Ubicacion de cadena seleccionada: Puntarenas");
    } else {
        provincia7 = false;
    }
    if (provincia1 == false && provincia2 == false && provincia3 == false && provincia4 == false && provincia5 == false && provincia6 == false && provincia7 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }
    // VALIDACION DE ASCIENTOS 

    if (document.getElementById('VIP').checked) {
        console.log("Tipo de ascientos: VIP");
    } else {
        asciento1 = false;
    }

    if (document.getElementById('ley').checked) {
        console.log("Tipo de ascientos: Ley 7600");
    } else {
        asciento2 = false;
    }

    if (document.getElementById('regular').checked) {
        console.log("Tipo de ascientos: Regular");
    } else {
        asciento3 = false;
    }

    if (asciento1 == false && asciento2 == false && asciento3 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }

    if (document.getElementById('terror').checked) {
        console.log("Categoría seleccionada: Terror");
    } else {
        categoria1 = false;
    }

    if (document.getElementById('ciencia').checked) {
        console.log("Categoría seleccionada: Ciencia ficción");
    } else {
        categoria2 = false;
    }
    if (document.getElementById('drama').checked) {
        console.log("Categoría seleccionada: Drama");
    } else {
        categoria3 = false;
    }
    if (document.getElementById('accion').checked) {
        console.log("Categoría seleccionada: Accción");
    } else {
        categoria4 = false;
    }
    if (document.getElementById('comedia').checked) {
        console.log("Categoría seleccionada: Comedia");
    } else {
        categoria5 = false;
    }
    if (document.getElementById('infantiles').checked) {
        console.log("Categoría seleccionada: Infantiles");
    } else {
        categoria6 = false;
    }
    if (categoria1 == false && categoria2 == false && categoria3 == false && categoria4 == false && categoria5 == false && categoria6 == false) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    }
    if (document.getElementById('sala_regular').checked) {
        console.log('Tipo de sala: Sala regular');
    } else {
        tipo1 = false;
    }

    if (document.getElementById('2d').checked) {
        console.log('Tipo de sala: 2D');
    } else {
        tipo2 = false;
    }
    if (document.getElementById('3d').checked) {
        console.log('Tipo de sala: 3D');
    } else {
        tipo3 = false;
    }
    if (document.getElementById('4d').checked) {
        console.log('Tipo de sala: 4D');
    } else {
        tipo4 = false;
    }
    if (document.getElementById('imax').checked) {
        console.log('Tipo de sala: IMAX');
    } else {
        tipo5 = false;
    }
    if (tipo1 == false && tipo2 == false && tipo3 == false && tipo4 == false && tipo5 == false)
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor marque las casillas con algún valor correspondiente'
        })
    else {
        obtenerDatos();
    }

    if (document.getElementById('15').checked) {
        console.log('El margen de ganancia es de: 15%');
    } else {
        ganancia1 = false;
    }
    if (document.getElementById('20').checked) {
        console.log('El margen de ganancia es de: 20%');
    } else {
        ganancia2 = false;
    }
    if (document.getElementById('25').checked) {
        console.log('El margen de ganancia es de: 25%');
    } else {
        ganancia3 = false;
    }
    if (document.getElementById('30').checked) {
        console.log('El margen de ganancia es de: 30%');
    } else {
        ganancia4 = false;
    }
    if (document.getElementById('35').checked) {
        console.log('El margen de ganancia es de: 35%');
    } else {
        ganancia5 = false;
    }


}


registrar.addEventListener("click", validar);