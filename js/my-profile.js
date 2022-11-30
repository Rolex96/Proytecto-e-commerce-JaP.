function mostrarEmail() {

    if (localStorage.getItem("User name")) {

        nombreUsuario = localStorage.getItem("User name")


        document.getElementById("userName").value = nombreUsuario;

    }
}

document.getElementById("guardarDatos").addEventListener("click",

    function guardarDatos() {

        localStorage.setItem("nombre", document.getElementById("nombre").value);
        localStorage.setItem("sNombre", document.getElementById("sNombre").value);
        localStorage.setItem("apellido", document.getElementById("apellido").value);
        localStorage.setItem("sApellido", document.getElementById("sApellido").value);
        localStorage.setItem("telefono", document.getElementById("telefono").value);

    })


function mostrarDatos() {

        document.getElementById("nombre").value = localStorage.getItem("nombre")
        document.getElementById("sNombre").value = localStorage.getItem("sNombre")
        document.getElementById("apellido").value = localStorage.getItem("apellido")
        document.getElementById("sApellido").value = localStorage.getItem("sApellido")
        document.getElementById("telefono").value = localStorage.getItem("telefono")

    }


document.addEventListener("DOMContentLoaded", function () {
    mostrarEmail();
    mostrarDatos();
})