let informacionDelProducto = [];
let comentariosDelProducto = [];
let imagenesDelProducto = [];
let puntuacionDelProducto = [];

function verinformacionDelProducto() {

    let producto = informacionDelProducto;
    let htmlInformacionproducto = "";

    htmlInformacionproducto += `
    <div class="container">
     <h2 id="titulo">${producto.name}</h2>
     <hr>
     <strong>Precio</strong>
     <p>${producto.currency} ${producto.cost}</p>
     <strong>Descripcion</strong>
     <p>${producto.description}</p>
     <strong>Categoria</strong>
     <p>${producto.category}</p>
     <strong>Cantidad de vendidos</strong>
     <p>${producto.soldCount}</p>
     <strong>Imagenes ilustrativas</strong>
    </div>
            `

    document.getElementById("infoProducto").innerHTML = htmlInformacionproducto;
}

function verimagenesDelProducto() {

    let htmlImagenesproducto = "";

    for (let imagen of imagenesDelProducto) {

        htmlImagenesproducto +=
            `    
                   <div class="col" style="margin: 12px 12px ;">
                      <img src="${imagen}" class="card img-fluid" alt="Imagenes meramente ilustrativas.">
                   </div>
            `
    }

    document.getElementById("imagenesProducto").innerHTML = htmlImagenesproducto;
}

function vercomentariosDelProducto() {

    let htmlComentariosproducto = "";

    for (let comentario of comentariosDelProducto) {

        if (comentario.score == 5)

            htmlComentariosproducto +=


                `<div class="card">
                                 <p  style="padding: 10px 10px 0px ;" ><strong>${comentario.user}</strong>
                                 - ${comentario.dateTime} -
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i><br>
                                ${comentario.description}</p>
                            </div>`;

        if (comentario.score == 4)

            htmlComentariosproducto +=


                `<div class="card">
                                 <p  style="padding: 10px 10px 0px ;" ><strong>${comentario.user}</strong>
                                 - ${comentario.dateTime} - 
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star "></i><br>
                                ${comentario.description}</p>
                             </div>`

        if (comentario.score == 3)

            htmlComentariosproducto +=


                `<div class="card">
                                 <p  style="padding: 10px 10px 0px ;" ><strong>${comentario.user}</strong>
                                 - ${comentario.dateTime} -
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star "></i>
                                 <i class="fa fa-star "></i><br>
                                ${comentario.description}</p>
                             </div>`

        if (comentario.score == 2)

            htmlComentariosproducto +=


                `<div class="card">
                                 <p  style="padding: 10px 10px 0px ;" ><strong>${comentario.user}</strong>
                                 - ${comentario.dateTime} -
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star "></i>
                                 <i class="fa fa-star "></i>
                                 <i class="fa fa-star "></i><br>
                               ${comentario.description}</p>
                            </div>`
        
        if (comentario.score == 1)

            htmlComentariosproducto +=


                `<div class="card">
                                 <p  style="padding: 10px 10px 0px ;" ><strong>${comentario.user}</strong>
                                 - ${comentario.dateTime} -
                                 <i class="fa fa-star checked"></i>
                                 <i class="fa fa-star "></i>
                                 <i class="fa fa-star "></i>
                                 <i class="fa fa-star "></i>
                                 <i class="fa fa-star "></i><br>
                               ${comentario.description}</p>
                            </div>`
        console.log(comentario.score)

    }

    document.getElementById("commentsProducto").innerHTML = htmlComentariosproducto;
}

verinformacionDelProducto();
vercomentariosDelProducto();
verimagenesDelProducto();


document.addEventListener("DOMContentLoaded", () => {

    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json").then(function (resultado) {
        if (resultado.status === "ok") {
            informacionDelProducto = resultado.data
            verinformacionDelProducto()
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + ".json").then(function (resultado) {
        if (resultado.status === "ok") {
            comentariosDelProducto = resultado.data
            vercomentariosDelProducto()
        }
    });
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json").then(function (resultado) {

        if (resultado.status === "ok") {
            imagenesDelProducto = resultado.data.images
            verimagenesDelProducto()

        }
    });
});
