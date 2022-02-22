window.onload = load;

function load(){
    main();
    verCarrito();
}

function verCarrito() {
    var productsEl = document.getElementById("productosCarrito");
    var carrito = JSON.parse(sessionStorage.getItem("carrito"));
    //Productos es un array de objetos, producto, que estan declarados en el archivo JSON
    carrito.forEach(producto => {
      productsEl.innerHTML += `
                <div class="col-md-6 col-lg-4 col-xl-3 mt-2">
                    <div class="card m-auto" style="width: 18rem;" id="${producto.id}">
                        
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">

                        <div class="card-body">
                            <h4 class="card-title">${producto.nombre}</h4>
                            <h5 class="card-title">${producto.precio}€ x ${producto.cantidad}</h5>
                            <p class="card-text">Total = ${Number(producto.precio) * Number(producto.cantidad)}€</p>
                            <hr>
                            <div class="container-fluid p-0 ">
                                <div class="row justify-content-center text-center">
                                    <div class="col-4 p-0 ">
                                        <button class="eliminar btn p-0" id="eliminar(${producto.id})"><i class="fas fa-cart-arrow-down"></i> Eliminar</button> 
                                    </div>
                                    <div class="col-4 p-0">
                                        <p>Cantidad: ${producto.cantidad}</p>
                                    </div>
                                    <div class="col-4 p-0">
                                        <button class="aniadir btn p-0" id="aniadir(${producto.id})"><i class="fas fa-cart-plus"></i> Añadir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          `;
    });

    carrito.forEach(producto => {
        var id = producto.id;
        document.getElementById(`eliminar(${producto.id})`).addEventListener("click", function(){
            eliminarProducto(id);
        }, false);
    });
    carrito.forEach(producto => {
        var id = producto.id;
        document.getElementById(`aniadir(${producto.id})`).addEventListener("click", function(){
            aniadirProducto(id);
        }, false);
    });
}

function eliminarProducto(id) {
    var carrito = JSON.parse(sessionStorage.getItem("carrito"));
    var posicion = 0;
    carrito.forEach(producto => {
        
        if(id == producto.id){
            if(producto.cantidad>1){
                producto.cantidad--;
            }else{
                carrito.splice(posicion, 1);
            }
        };
        posicion++;

        
    });

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
}

function aniadirProducto(id) {
    var carrito = JSON.parse(sessionStorage.getItem("carrito"));

    carrito.forEach(producto => {
        if(id == producto.id){
            producto.cantidad++;
        };
        
    });

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
}