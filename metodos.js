
export function buscarUsuario (loading, resultado, repos, usuario){

    loading.textContent = "Cargando"
    fetch(`https://api.github.com/users/${usuario}`)
    .then(result => {
        if (result.ok != true){
            throw new Error ("Usuario no encontrado")
        }
        else {
            return result.json();//las promesas en {} deben llevar return
        }})
        .then(usuario => {mostrar(null, resultado, repos, usuario)//se llama adentro para evitar que se cargue el null
            renderizarRepositorios(repos, usuario)//no se pone en el literal pues arroja undefined por ser un metodo vacio
        })
        .catch(error => mostrar(error, resultado, null))
        .finally(()=>loading.textContent = "")
    }


function mostrar (error, contenedor, repos, usuario){
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


function renderizarRepositorios(contenedor, usuario){
    fetch(usuario.repos_url)
    .then(repos => repos.json())
    .then(arrayRepos =>{
        console.log(arrayRepos)
        const repos = arrayRepos.map((rep)=>{
            
            return `<ul><li>${rep.name}</li></ul>`
        })
        const strRepos = repos.join("");
        contenedor.innerHTML = strRepos;
    })
    
}

function mostrarElemento(elemento){
    elemento.classList.remove("ocultar")
}

function ocultarElemento (elemento){
    elemento.classList.add("ocultar")
}

