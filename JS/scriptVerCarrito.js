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
                <div class="productos" id="${producto.id}">
                    <div class="imagenProducto">
                      <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="descripcionProducto">
                        <h2>${producto.nombre}</h2>
                        <p class="precioProducto">${producto.precio}€ x ${producto.cantidad}</p>
                        <p class="precioProducto">Total = ${Number(producto.precio) * Number(producto.cantidad)}€</p>
                        <div class="cantidad">
                            <button id="eliminar(${producto.id})">eliminar</button> 
                            <p>${producto.cantidad}</p>
                            <button id="aniadir(${producto.id})">aniadir</button>
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