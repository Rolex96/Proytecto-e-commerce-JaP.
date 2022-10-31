let tarjetaCredito = document.getElementById("tarjetaCredito");
let transferencia = document.getElementById("transferencia");
let formaDePago = document.getElementById("formaDePago");
let feedback = document.getElementById("invalid-feedback");
let porcentaje = 0.15;

(function () {

  var forms = document.querySelectorAll('.needs-validation').forEach(function (form) {

      form.addEventListener('submit', function (event) {


        if (!tarjetaCredito.checked || !transferencia.checked) {
          feedback.innerHTML = `Debe seleccionar una forma de pago`;
          feedback.style.color="red";
          formaDePago.style.color="red";
        }

        if (!form.checkValidity()) {

          event.preventDefault()
          event.stopPropagation()
         
        }

        form.classList.add('was-validated')

        if (tarjetaCredito.checked || transferencia.checked) {
          feedback.innerHTML = "";
          formaDePago.style.color="blue";
        }

        if (form.checkValidity()) {
            mostrarAlerta()
        }
        
      }, false)
    })
})()

function mostrarAlerta() {

	document.getElementById("alertaExito").classList.add("show");

}

function verInfoCart() {

    let htmlContenidoCarrito = "";

    for (let productoCart of infoCart) {

        htmlContenidoCarrito += `<div class="row justify-content-md-center">
        <div class="col col-lg">
        <img src="${productoCart.image}" alt="${productoCart.name}" class="img-thumbnail" style="width: 75px;">
        </div>
        <div class="col col-lg">
        ${productoCart.name}
        </div>
        <div class="col col-lg">
        <b> ${productoCart.currency} - </b ><b id="unitCost" value="">${productoCart.unitCost}</b>
        </div>
        <div class="col col-lg">
          <input type="number" min="1" name="inputCantidad" id="inputCantidad" value="" oninput="sacarCuentas()" required>
          <div class="invalid-feedback">
                Debe ing. una cant.
              </div>
        </div>
        <div class="col col-lg">
          <b> ${productoCart.currency} - </b ><b id="subtotalCart">0</b>
        </div>
      </div>
      <div>
      <hr>
      </div> `

      }

    document.getElementById("contenidoCarrito").innerHTML = htmlContenidoCarrito;

}

function sacarCuentas(){

  let cantidad = document.getElementById("inputCantidad").value;
  let costo = document.getElementById("unitCost").textContent;

  document.getElementById("subtotalCart").innerHTML = cantidad*costo;
  document.getElementById("subtotalGeneral").innerHTML = "USD " + (cantidad*costo);
  document.getElementById("costoEnvio").innerHTML = "USD " + ((cantidad * costo) * porcentaje  * 100 )/ 100;
  document.getElementById("total").innerHTML = "USD " +( (cantidad*costo) + ((cantidad * costo) * porcentaje  * 100 )/ 100);

}
  
  transferencia.addEventListener('input', actualizarValores);
  
  function actualizarValores() {
    document.getElementById("numeroTarjeta").setAttribute("disabled", "");
    document.getElementById("codTarjeta").setAttribute("disabled", "");
    document.getElementById("vencTarjeta").setAttribute("disabled", "");
    document.getElementById("numeroDeCuenta").removeAttribute("disabled", "");
    document.getElementById("formaPago").innerHTML = "Transferencia bancaria";
  }

 tarjetaCredito.addEventListener('input', reactualizarValores);
  
 function reactualizarValores() {
   document.getElementById("numeroTarjeta").removeAttribute("disabled", "");
   document.getElementById("codTarjeta").removeAttribute("disabled", "");
   document.getElementById("vencTarjeta").removeAttribute("disabled", "");
   document.getElementById("numeroDeCuenta").setAttribute("disabled", "");
   document.getElementById("formaPago").innerHTML = "Tarjeta de crédito";
 }


        
document.addEventListener("DOMContentLoaded", () => {
    getJSONData(CART_INFO_URL + "25801.json").then(function (resultado) {
    if (resultado.status === "ok") {
        infoCart = resultado.data.articles
        verInfoCart();
    }
    document.getElementById("radioPremium").addEventListener("change", function(){
      porcentaje = 0.15;
      sacarCuentas();
    });
    
    document.getElementById("radioExpress").addEventListener("change", function(){
      porcentaje = 0.07;
      sacarCuentas();
    });
    
    document.getElementById("radioEstandar").addEventListener("change", function(){
      porcentaje = 0.05;
      sacarCuentas();
    });
});
});
