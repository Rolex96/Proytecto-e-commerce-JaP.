    let informacionDelProducto = [];
    let comentariosDelProducto = [];
    let imagenesDelProducto = [];
    let relDelProducto = [];

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
        let imagen = imagenesDelProducto;

            htmlImagenesproducto +=
                `    
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="${imagen[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="${imagen[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${imagen[2]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
              <img src="${imagen[3]}" class="d-block w-100" alt="...">
            </div>`

        document.getElementById("imagenesProducto").innerHTML = htmlImagenesproducto;
        
    }

    function vercomentariosDelProducto() {

        let htmlComentariosproducto = "";

        for (let comentario of comentariosDelProducto) {

            if (comentario.score == 5) {

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
                            </div>`}

            else if (comentario.score == 4) {

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
                             </div>`}

            else if (comentario.score == 3) {

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
                             </div>`}

            else if (comentario.score == 2) {

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
                            </div>`}

            else {

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
                            </div>`}
        }

        document.getElementById("commentsProducto").innerHTML = htmlComentariosproducto;
    }

    function verproductosRelacionados() {

        let htmlProductosRelacionados = "";

        for (let producto of relDelProducto) {

            htmlProductosRelacionados +=
                `      <div class="card col-3 cursor-active" onclick="setProdID(${producto.id})"
                           style="margin: 12px 12px ; text-align: center ; ">
                           <img src="${producto.image}" class="img-fluid" alt="">
                           <div class"container">
                            <h5>${producto.name}</h5 style="">
                           </div>
                       </div>
            `
        }
        document.getElementById("prodRelacionados").innerHTML = htmlProductosRelacionados;
    }

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
        getJSONData(PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json").then(function (resultado) {
            if (resultado.status === "ok") {
                relDelProducto = resultado.data.relatedProducts
                verproductosRelacionados()
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
    
        let now = new Date();
        let comentario = document.getElementById("comentario");
        let listaDeComentarios = document.getElementById("commentsProducto");
        let btnAgregar = document.getElementById("agregar");
        let listado = window.localStorage.getItem("Lista");
        let user = localStorage.getItem("User name");    

        function guardarComentario(valor, listaDeComentarios) {
    
            listaDeComentarios.innerHTML +=  

            `<div class="card">
            <p  style="padding: 10px 10px 0px ;" ><strong>${user}</strong>
            - ${now.getFullYear()}-${now.getMonth()}-${now.getDate()}
              ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star "></i>
            <i class="fa fa-star "></i>
            <i class="fa fa-star "></i><br>
             ${valor}</p></div>`;

            listado.push(document.getElementById("commentsProduct"));

            localStorage.setItem("Comentario", JSON.stringify(listado));
    
        };
    
        function limpiarComentario() {
            if (listado == null) {
                listado = [];
            } 
        };
    
        limpiarComentario();
    
        btnAgregar.addEventListener("click", () => {
    
            if (comentario.value !== "") {
                guardarComentario(comentario.value, listaDeComentarios);
                comentario.value = "";
            };
    
        });
    
    });
