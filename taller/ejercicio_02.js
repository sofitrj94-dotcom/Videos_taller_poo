// 2. TIENDA Y CARRITO DE COMPRAS
class Producto {
    #id;
    #nombre;
    #precio;

    constructor(id, nombre, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    verNombre() {
        return this.#nombre;
    }

    verId() {
        return this.#id;
    }

    calcularCosto(cantidad) {
        if (this.#precio < 0 || cantidad <= 0) {
            console.log("Precio o cantidad no válidos");
            return 0;
        }
        return this.#precio * cantidad;
    }
}

class ProductoFisico extends Producto {
    calcularCosto(cantidad) {
        return super.calcularCosto(cantidad) + 5000;
    }
}

class ProductoDigital extends Producto {
    calcularCosto(cantidad) {
        return super.calcularCosto(cantidad);
    }
}

let productos = [];
let carrito = [];
let producto1 = new ProductoFisico(1, "Cuaderno", 8000);
let producto2 = new ProductoDigital(2, "Libro digital", 12000);
productos.push(producto1);
productos.push(producto2);
carrito.push(producto1);
carrito.push(producto2);
let totalCarrito = 0;
for (let i = 0; i < carrito.length; i = i + 1) {
    totalCarrito = totalCarrito + carrito[i].calcularCosto(1);
}
console.log("Productos de la tienda:", productos.length);
console.log("Total del carrito:", totalCarrito);
