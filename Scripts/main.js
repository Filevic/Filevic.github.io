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
         <div class="bottom-tarjeta">
             <h3>${name}</h3>
             <p>${authors}</p>
             <p>${director}</p>
             <p>${resume}</p>
             <p>${school}</p>
         </div>
     </section>
     `
} 

llamarAPI()
