import { resultado } from "./app.js";
export function buscarUsuario (nombre){
    let usuario = fetch(`https://api.github.com/users/${nombre}`)
    .then(result => {
        if (result.ok != true){
            throw new Error ("Usuario no encontrado")
        }
        else {
            return result.json();//las promesas en {} deben llevar return
        }})
        .then(usuario => console.log(usuario.login))
        .catch(error => console.log (error))
}

export function mostrar (contenedor, usuario){
    contenedor.append(usuario);
}