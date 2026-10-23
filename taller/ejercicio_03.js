// 3. SISTEMA DE TRANSPORTE
class Vehiculo {
    #identificador;
    #capacidad;
    #estado;

    constructor(identificador, capacidad, estado) {
        this.#identificador = identificador;
        this.#capacidad = capacidad;
        this.#estado = estado;
    }

    verIdentificador() {
        return this.#identificador;
    }

    describirViaje() {
        return "El vehículo realiza un viaje";
    }

    verInfo() {
        return this.#identificador + ", capacidad: " + this.#capacidad + ", estado: " + this.#estado;
    }
}

class Automovil extends Vehiculo {
    describirViaje() {
        return "El automóvil transporta pasajeros por carretera";
    }
}

class Motocicleta extends Vehiculo {
    describirViaje() {
        return "La motocicleta transporta pasajeros de forma ágil";
    }
}

class Bicicleta extends Vehiculo {
    describirViaje() {
        return "La bicicleta realiza un recorrido sin motor";
    }
}

let vehiculos = [];
vehiculos.push(new Automovil("A01", 4, "disponible"));
vehiculos.push(new Motocicleta("M01", 2, "disponible"));
vehiculos.push(new Bicicleta("B01", 1, "disponible"));
for (let i = 0; i < vehiculos.length; i = i + 1) {
    console.log(vehiculos[i].verInfo());
    console.log(vehiculos[i].describirViaje());
}
