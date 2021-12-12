const contenedor = document.getElementById('#contenedor')

function captura_datos(){
     const miIdentificador = document.getElementById("identificador").value;
     const miTitulo = document.getElementById("titulo").value;
     const miAnio = document.getElementById("anio").value;
     const miEtiqueta = document.getElementById("etiquetas").value;
     const miEscuela = document.getElementById("escuela").value;
     const miResumen = document.getElementById("resumen").value; 
     const miRuta = document.getElementById("route").value;
     const miEstado = document.getElementById("estado").value;
     const miMensaje = document.getElementById("mensaje").value;
     const miSinodal = document.getElementById("sinodal").value;
     const miDirector = document.getElementById("director").value;
     const miAutor = document.getElementById("autores").value;

    const data = {
        thesisId : miIdentificador,
        name: miTitulo,
        year: miAnio,
        tags: miEtiqueta,
        school: miEscuela,
        resume: miResumen,
        pdfRoute: miRuta,
        status : miEstado,
        statusMessage: miMensaje,
        synodals : miSinodal,
        director : miDirector,
        authors : miAutor
    }
    console.log(data);

    return data;
}

function sent_data(){
    const data1 = captura_datos();
    fetch('https://tesis-server-escom.herokuapp.com/thesis', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data1)

    })
    .then((res ) => res.json())
    .catch(error => console.error('Error: ',error))
    .then(response => console.log('Success: ', response));

}