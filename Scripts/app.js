document.getElementById('formulario').addEventListener('submit', salvarComentario);

function salvarComentario(e){
    let titulo = document.getElementById('title').value;
    let descripcion = document.getElementById('descripcion').value;

    const coment = {
        titulo,  //titulo : titulo
        descripcion
    };

    // localStorage.setItem('comentarios', JSON.stringify(coment));
    
    // console.log(JSON.parse(localStorage.getItem('comentarios')));

    if (localStorage.getItem('comentarios') === null){
        let comentarios = [];
        comentarios.push(coment);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    } else {
       let comentarios = JSON.parse(localStorage.getItem('comentarios'));
       comentarios.push(coment);
       localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }

    getComentarios();
    document.getElementById('form').reset();
    e.preventDefault();
}

function getComentarios(){
   let comentarios = JSON.parse(localStorage.getItem('comentarios'));
   let comentario = document.getElementById('comentario');

   comentario.innerHTML = '';

   for(let i = 0 ; i < comentarios.length; i++){
       
       let titulo = comentarios[i].titulo;
       let descripcion = comentarios[i].descripcion;
    
        comentario.innerHTML += `<div class="card mb-3 fs-4">
            <div class="card-body">
                <p>${titulo} - ${descripcion}</p>
                <a class="btn btn-danger fs-5" onclick="eliminarComentario('${titulo}')">Borrar</a>
            </div>
        </div>`
   }
}

function eliminarComentario(titulo){
   let comentarios = JSON.parse( localStorage.getItem('comentarios'));
   for(let i = 0 ; i < comentarios.length; i++){
        if(comentarios[i].titulo == titulo){
            comentarios.splice(i, 1);
        }
   }
   localStorage.setItem('comentarios', JSON.stringify(comentarios));
   getComentarios();
}

getComentarios();