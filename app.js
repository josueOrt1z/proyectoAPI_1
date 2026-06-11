import { buscarUsuario } from "./metodos.js";

const inputuUsername = document.querySelector("#username");
const botonBuscar = document.querySelector("#buscar");
const loading = document.querySelector("#loading");
export const resultado = document.querySelector("#resultado");

const usuario = "josueOrt1z"
buscarUsuario(usuario)