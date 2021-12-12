const contenedor = document.getElementById('#contenedor')

function captura_datos(){
     const miBoleta = document.getElementById("boleta").value;
     const miPassword = document.getElementById("password").value;

    const data = {
        boleta : miBoleta,
        password: miPassword
    }
    console.log(data);

    return data;
}

function sent_data(){
    const data1 = captura_datos();
    fetch('https://tesis-server-escom.herokuapp.com/user/login', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data1)

    })
    .then((res) =>  res.json())
    .catch(error => console.error('Error: ',error))
    .then(response => {
        //console.log('Success: ', response)
        const respuesta= response['success'];
        if (respuesta == false){
            swal("Error!", response['error'], "error");
        }else{
            const array = response['user']; 
            swal({
                icon: 'success',
                title: 'Bienvenido!',
                text: array.name,
                timer: 1500
            })
            setTimeout( () => { window.location.replace("../index.html") }, 1000);
        }
    });

}

