

let usuarioActual = null;

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
        .then(usuario => {usuarioActual = usuario
            console.log(usuarioActual)
            return mostrar(resultado)})//se llama adentro para evitar que se cargue el null
        .catch(error => console.log (error))
        .finally(()=>loading.textContent = "")
    }

export function mostrar (contenedor){
    if (usuarioActual){
        const perfil =
           `<img src="${usuarioActual.avatar_url}"></img>
            <h1> ${usuarioActual.login}</h1>       
            <p>Seguidores: ${usuarioActual.followers} </p>
            <p>Repositorios publicos: ${usuarioActual.public_repos}</p>`
        contenedor.innerHTML = perfil
        }
        else {
            contenedor.textContent = "Usuario no encontrado"
        }
}

function mostrarElemento(elemento){
    elemento.classList.remove("ocultar")
}

function ocultarElemento (elemento){
    elemento.classList.add("ocultar")
}

