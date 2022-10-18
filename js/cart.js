function verInfoCart() {

    let htmlContenidoCarrito = "";
    
    for (let productoCart of infoCart) {
      

        htmlContenidoCarrito += `<div class="row justify-content-md-center">
        <div class="col col-lg-">
        <img src="${productoCart.image}" alt="${productoCart.name}" class="img-thumbnail" style="width: 75px;">
        </div>
        <div class="col col-lg-">
        ${productoCart.name}
        </div>
        <div class="col col-lg-">
        <b> ${productoCart.currency} - </b ><b id="unitCost" value="${productoCart.unitCost}">${productoCart.unitCost}</b>
        </div>
        <div class="col col-lg-">
          <input type="number" min="1" name="inputCantidad" id="inputCantidad" value="${productoCart.count}" oninput="calcularSubtotal()">
        </div>
        <div class="col col-lg-">
          <b> ${productoCart.currency} - </b ><b id="subtotalCart">${productoCart.unitCost}</b>
        </div>
      </div>
      <div>
      <hr>
      </div> `

      }

    document.getElementById("contenidoCarrito").innerHTML = htmlContenidoCarrito;

}

function calcularSubtotal(){

  let cantidad = document.getElementById("inputCantidad").value;
  let costo = document.getElementById("unitCost").textContent;

  document.getElementById("subtotalCart").innerHTML = cantidad*costo;

}
        
document.addEventListener("DOMContentLoaded", () => {
    getJSONData(CART_INFO_URL + "25801.json").then(function (resultado) {
    if (resultado.status === "ok") {
        infoCart = resultado.data.articles
        console.log(infoCart);
        verInfoCart();
    }
});
});