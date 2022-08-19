/*
const form = document.getElementById("form")
const dato = document.getElementById("dato")

let validar = document.getElementById("validar")

form.addEventListener('submit', validacion)

function validacion() {
    validar.innerHTML = ''
    validarDato()
}

function validarDato(){
    if(dato.value == null || dato.value == '')
    validar.innerHTML == 'Ingrese un dato'
    e.preventDefault()
}

document.getElementById("buttonx").onclick = function (1) {
    location.href = "portada.html";
};
*/


const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const button = document.getElementById("button-ingresar");
const seCumple = true;


 button.addEventListener('click',() =>{
    if( email.value.length > 0 && contraseña.value.length > 0){
        document.getElementById("button-ingresar").onclick = function  () {
        window.location.href = "portada.html";
        }
    }
    else {  
        document.getElementById("alert-login").innerHTML += "Debe ingresar ambos datos."
        document.getElementById("button-ingresar").onclick = function  () {
        window.location.href = "index.html";
        }
      } })


   
      
