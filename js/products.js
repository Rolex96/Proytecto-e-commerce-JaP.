/*
function mostrarListado(listaDeAutos) {
    for (const auto of listaDeAutos) {
        let li = `
        Nombre: ${auto.name}<br>
        Descripción: ${auto.description}<br>
        Divisa: ${auto.currency}<br>
        Precio: ${auto.cost}<br>
        <hr>
        `;
        document.getElementsById("autos101").innerHTML += li;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(AUTOS_URL).then(resultado => {
        if (resultado.status == "ok") {
           mostrarListado(resultado.data.products);
            console.log(resultado.data.products);
        }
        else {
            alert("Algo ha fallado" + resultado.data)
        }
    })
})
*/
function verListadoDeAutos(){

    let htmlContentToAppend = "";
    for(let i = 0; i < listadoDeAutos.length; i++){
        let auto = listadoDeAutos[i];

            htmlContentToAppend += `
            <div onclick="setCatID(${auto.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${auto.image}" alt="${auto.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${auto.name}</h4>
                            <small class="text-muted">${auto.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${auto.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("autos101").innerHTML = htmlContentToAppend;
    }


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(AUTOS_URL).then(function(resultado){
        if (resultado.status === "ok"){
            listadoDeAutos = resultado.data.products
            verListadoDeAutos()
        }
    });
});
