import { buscarUsuario} from "./metodos.js";

const inputuUsername = document.querySelector("#username");
const botonBuscar = document.querySelector("#buscar");
const loading = document.querySelector("#loading");
export const resultado = document.querySelector("#resultado");
const repos = document.querySelector("#repos");


botonBuscar.addEventListener("click", ()=>{
    const usuario = inputuUsername.value;
    buscarUsuario(loading, resultado, repos, usuario);
    
})