function captura() {
    
    var query = "https://tesis-server-escom.herokuapp.com/thesis/search?";  

    var miNombre = document.getElementById("nombre").value;
      if (miNombre){
       query = query+"name="+miNombre;
    }

    var miAnio = document.getElementById("anio").value;
     if (miAnio){
         query = query+"&"+"year="+miAnio
    }

    var miEtiqueta = document.getElementById("etiquetas").value;
     if (miEtiqueta){
          query = query+"&"+"tags="+miEtiqueta
    }
    
    var miIdtesis = document.getElementById("idTesis").value;
     if (miIdtesis){
          query = query+"&"+"thesisId="+miIdtesis
    }

    var miEscuela = document.getElementById("escuela").value;
     if (miEscuela){
          query = query+"&"+"school="+miEscuela
    }

    var miEstado = document.getElementById("estado").value;
     if (miEstado){
          query = query+"&"+"status="+miEstado
    }

    var miResumen = document.getElementById("resumen").value;
     if (miResumen){
          query = query+"&"+"resume="+miResumen
    }
    // console.log("No se introducio algun dato")
        
    if ( query.length == 55){
        swal("Error!", "Introduzca al menos un valor de busqueda", "error");
        document.Busqueda.nombre.focus();
    }
        
    return query;
}

const caja = document.getElementById('caja')

const llamarAPI = async () => {
    var query2 = captura();
    const res = await fetch(query2)
    const data = await res.json()
    //console.log(data)

    
    const result = data.data.map((informacion) => generarTarjeta(informacion)).join(' ')
    if( !result ){
        swal("Oops...", "No hay resultados de busqueda", "error");
    }else {
        caja.innerHTML = result
    }
    
    
}

const generarTarjeta = ({authors, director,name,resume,school,year,thesisId,status,statusMessage,pdfRoute}) => {
    return    `   
    <section class="tarjeta">
        <div class="top-tarjeta">
            <h2>${name}</h2>
        </div>    
        <div class="bottom-tarjeta">
            <p><b>Autor(es): </b> ${authors}</p>
            <p><b>Director: </b>${director}</p>
            <p><b>Resumen: </b><br>${resume}</p>
            <p><b>Escuela: </b>${school}</p>
            <p><b>Identificador de la tesis: </b>${thesisId}</p>
            <p><b>Año: </b>${year}</p>
            <p><b>Estado: </b>${status}</p>
            <p><b>Detalles: </b>${statusMessage}</p>
            <p><b>Enlace: </b>${pdfRoute}</p>
        </div>
    </section>
    `
} 

const limpiarResultados = () => {
    
    caja.innerHTML = ""
}