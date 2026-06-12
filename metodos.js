
export function buscarUsuario (loading, resultado, usuario){
    loading.textContent = "Cargando"
    let usuarioABuscar = fetch(`https://api.github.com/users/${usuario}`)
    .then(result => {
        if (result.ok != true){
            throw new Error ("Usuario no encontrado")
        }
        else {
            return result.json();//las promesas en {} deben llevar return
        }})
        .then(usuario => mostrar(null, resultado, usuario))//se llama adentro para evitar que se cargue el null
        .catch(error => mostrar(error, resultado, null))
        .finally(()=>loading.textContent = "")
    }

export function mostrar (error, contenedor, usuario){
    if (usuario){
        const perfil =
           `<img src="${usuario.avatar_url}"></img>
            <h1> ${usuario.login}</h1>       
            <p>Seguidores: ${usuario.followers} </p>
            <p>Repositorios publicos: ${usuario.public_repos}</p>`
        contenedor.innerHTML = perfil
        }
        else {
            contenedor.textContent = error.message
        }
            
            
}

function mostrarElemento(elemento){
    elemento.classList.remove("ocultar")
}

function ocultarElemento (elemento){
    elemento.classList.add("ocultar")
}

