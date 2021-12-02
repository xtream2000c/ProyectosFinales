var carrito = [];

function crearCarrito() {
    productos.forEach(producto => {
        var id = producto.id;
        document.getElementById(`aniadirCarrito(${producto.id})`).addEventListener("click", function(){
            aniadirProducto(id);
        }, false);
    });
    
}

function aniadirProducto(id) {
    
    var yaEsta = 0;

    carrito.forEach(articulo => {
        
        if (articulo.id == id) {
                yaEsta++;
        }
    });

    if (yaEsta == 0) {
        carrito.push(productos[id]);
    }
}

