const contenedor = document.getElementById('#contenedor')

function captura_datos(){
     const miBoleta = document.getElementById("boleta").value;
     const miNombre = document.getElementById("nombre").value;
     const miCorreo = document.getElementById("correo").value;
     const miTipo = document.getElementById("tipo").value;
     const miPassword = document.getElementById("password").value;

    const data = {
        boleta : miBoleta,
        name: miNombre,
        email: miCorreo,
        type: miTipo,
        password: miPassword
    }
    console.log(data);

    return data;
}

function sent_data(){
    const data1 = captura_datos();
    fetch('https://tesis-server-escom.herokuapp.com/user/register', {
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