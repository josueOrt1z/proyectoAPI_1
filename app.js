import { buscarUsuario, mostrar } from "./metodos.js";

const inputuUsername = document.querySelector("#username");
const botonBuscar = document.querySelector("#buscar");
const loading = document.querySelector("#loading");
export const resultado = document.querySelector("#resultado");



botonBuscar.addEventListener("click", ()=>{
    const usuario = inputuUsername.value;
    buscarUsuario(loading, resultado, usuario);
   
})