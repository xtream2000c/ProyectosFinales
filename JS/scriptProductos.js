window.onload = load;

function load(){
    cargarProductos();
    main();
    
}

function cargarProductos() {
    var productsEl = document.getElementById("productos");
    //Productos es un array de objetos, producto, que estan declarados en el archivo JSON
    productos.forEach((producto) => {
      productsEl.innerHTML += `
                <div class="productos" id="${producto.id}">
                    <div class="imagenProducto">
                      <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="descripcionProducto">
                        <h2>${producto.nombre}</h2>
                        <p class="precioProducto">${producto.precio}€</p>
                        <p>
                            ${producto.descripcion}
                        </p>
                        <div class="botonCentrado">
                            <button class="add-to-cart" onclick="addToCart(${producto.id})">Aniadir al carrito</button>
                        </div>
                    </div>
                </div>
          `;
    });
}
