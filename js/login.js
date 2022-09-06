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


/*
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
*/

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(g - signin2).css("display", "none");

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("Su sesion ha sido cerrada");
        $(g - signin2).css("display", "block");
        $(".data").css("display", "none");

    });
}

function guardarUserName() {
    let userName = document.getElementById("email")
    localStorage.setItem("User name", userName.value)
}
function mostrarUserName() {
    if (localStorage.getItem("User name")) {
        nombreUsuario = localStorage.getItem("User name")
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("button-ingresar").addEventListener("click", function () {

        guardarUserName();

        let email = document.getElementById("email").value;
        let contraseña = document.getElementById("contraseña").value;
        let condicion = true;

        if (email == '') {
            condicion = false;
            document.getElementById("alert-email").innerHTML = "Introduzca un Email válido";
        } else {
            document.getElementById("alert-email").innerHTML = "";
        }
        if (contraseña == '') {
            condicion = false;
            document.getElementById("alert-contr").innerHTML = "Introduzca una contraseña válida";
        } else {
            document.getElementById("alert-contr").innerHTML = "";
        }
        if (condicion) {
            window.location = "portada.html";
        }
    })
})

