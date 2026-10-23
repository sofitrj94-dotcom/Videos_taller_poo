// 8. SERVICIOS DE REPARACIÓN DEL HOGAR
class Servicio {
    #codigo;
    #descripcion;
    #tarifa;

    constructor(codigo, descripcion, tarifa) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#tarifa = tarifa;
    }

    verDescripcion() {
        return this.#descripcion;
    }

    calcularCosto() {
        if (this.#tarifa < 0) {
            console.log("La tarifa no puede ser negativa");
            return 0;
        }
        return this.#tarifa;
    }
}

class Electricidad extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 10000;
    }
}

class Plomeria extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 15000;
    }
}

class Mantenimiento extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 5000;
    }
}

let servicios = [];
let ordenes = [];
servicios.push(new Electricidad("S01", "Reparación eléctrica", 50000));
servicios.push(new Plomeria("S02", "Reparación de tubería", 40000));
servicios.push(new Mantenimiento("S03", "Mantenimiento general", 30000));
for (let i = 0; i < servicios.length; i = i + 1) {
    console.log(servicios[i].verDescripcion() + ": $" + servicios[i].calcularCosto());
}
ordenes.push("Orden 1: reparación eléctrica");
