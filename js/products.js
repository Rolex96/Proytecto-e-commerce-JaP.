let listadoDeProductos = [];
let min;
let max;
let buscador;

function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}

function verListadoDeproductos() {

    let htmlAtributosproducto = "";

    for (let producto of listadoDeProductos) {

        if ((!(parseInt(producto.cost) < min) && (!(parseInt(producto.cost) > max)))) {
            
            let search = producto.name.toLowerCase()

            if (search.includes(buscador) || buscador == undefined) {

                htmlAtributosproducto += `
                
            <div onclick="setProdID(${producto.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${producto.name} - ${producto.currency} ${producto.cost}</h4>
                            <small class="text-muted">${producto.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${producto.description}</p>
                    </div>
                </div>
            </div>
            `
            }
        }
    }

    document.getElementById("productos").innerHTML = htmlAtributosproducto;
}

/*
Nada se ejecuta hasta este punto "DomContentLoaded",
 que ejecuta una funcion;
 lo primero que hace es llamar a getJSONData
 y cuando se da una respuesta 'entonces'
 el objeto que devolvio me fijo si su "status" es "ok" 
 y si es así guardo la data que trae en una variable.
 */

document.addEventListener("DOMContentLoaded", () => {

    getJSONData(PRODUCTS_URL + "/" + localStorage.getItem("catID") + ".json").then(function (resultado) {
        if (resultado.status === "ok") {
            listadoDeProductos = resultado.data.products
            verListadoDeproductos()
        }
    });

    document.getElementById("filtrar").addEventListener("click", () => {
        min = parseInt(document.getElementById("costMin").value);
        max = parseInt(document.getElementById("costMax").value);
        verListadoDeproductos(listadoDeProductos);
    })

    document.getElementById("limpiar").addEventListener("click", () => {
        document.getElementById("costMin").value = "";
        document.getElementById("costMax").value = "";
        min = undefined;
        max = undefined;
        verListadoDeproductos(listadoDeProductos);
    })

    document.getElementById("ordenPorCant").addEventListener("click", () => {
        listadoDeProductos.sort(function (a, b) {
            return parseInt(b.soldCount) - parseInt(a.soldCount);
        });
        verListadoDeproductos(listadoDeProductos);
    })

    document.getElementById("ordenAsc").addEventListener("click", () => {
        listadoDeProductos.sort(function (a, b) {
            return parseInt(a.cost) - parseInt(b.cost);
        });
        verListadoDeproductos(listadoDeProductos);
    })

    document.getElementById("ordenDesc").addEventListener("click", () => {
        listadoDeProductos.sort((a, b) => {
            return parseInt(b.cost) - parseInt(a.cost);
        });
        verListadoDeproductos(listadoDeProductos);
    })

    document.getElementById("buscador").addEventListener("input", () => {
        buscador = document.getElementById("buscador").value;
        verListadoDeproductos(listadoDeProductos);
    })
});
