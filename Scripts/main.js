const contenedor = document.getElementById('contenedor')

const llamarAPI = async () => {
    const res = await fetch('https://tesis-server-escom.herokuapp.com/thesis')
    const data = await res.json()//Esto convierte en JS lo que se trae de la API
    //console.log(res) 
    console.log(data)

    const result = data.result.map((informacion) => generarTarjeta(informacion)).join(' ')//con cada personaje que se lea le pedimos con map que se cree una tarjeta 

    contenedor.innerHTML = result
}

//Aqui destruimos el arreglo original porque personaje contenia mas datos 
//Y a nosotros solo nos interesan dos propiedades que son las que estamos solicitando
//en la funcion

 const generarTarjeta = ({authors, director,name,resume,school}) => {
     return    `   
     <section class="tarjeta">
         <div class="top-tarjeta">
             <h2>${name}</h2>
         </div>    
         <div class="bottom-tarjeta">
             <p><b>Autor(es):</b> ${authors}</p>
             <p><b>Director:</b>${director}</p>
             <p><b>Resumen:</b><br>${resume}</p>
             <p><b>Escuela:</b>${school}</p>
         </div>
     </section>
     `
} 

llamarAPI()
