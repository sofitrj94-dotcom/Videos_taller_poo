// 7. PEDIDOS DE UN RESTAURANTE
class ElementoMenu {
    #nombre;
    #precio;
    #disponible;

    constructor(nombre, precio, disponible) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#disponible = disponible;
    }

    verNombre() {
        return this.#nombre;
    }

    calcularPrecio() {
        if (this.#precio < 0 || this.#disponible === false) {
            console.log("Precio inválido o producto agotado");
            return 0;
        }
        return this.#precio;
    }
}

class PlatoPreparado extends ElementoMenu {
    calcularPrecio() {
        return super.calcularPrecio() + 3000;
    }
}

class Bebida extends ElementoMenu {
    calcularPrecio() {
        return super.calcularPrecio();
    }
}

let menu = [];
let pedidos = [];
menu.push(new PlatoPreparado("Hamburguesa", 18000, true));
menu.push(new Bebida("Jugo", 5000, true));
pedidos.push(menu[0]);
pedidos.push(menu[1]);
let totalPedido = 0;
for (let i = 0; i < pedidos.length; i = i + 1) {
    console.log(pedidos[i].verNombre() + ": " + pedidos[i].calcularPrecio());
    totalPedido = totalPedido + pedidos[i].calcularPrecio();
}
console.log("Total del pedido:", totalPedido);
