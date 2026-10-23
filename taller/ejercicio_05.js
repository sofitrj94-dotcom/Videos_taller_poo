// 5. GESTIÓN DE EMPLEADOS Y NÓMINA
class Empleado {
    #identificacion;
    #nombre;
    #valorPago;

    constructor(identificacion, nombre, valorPago) {
        this.#identificacion = identificacion;
        this.#nombre = nombre;
        this.#valorPago = valorPago;
    }

    verNombre() {
        return this.#nombre;
    }

    calcularPago() {
        return this.#valorPago;
    }
}

class EmpleadoPlanta extends Empleado {
    calcularPago() {
        return super.calcularPago() + 100000;
    }
}

class Contratista extends Empleado {
    calcularPago() {
        return super.calcularPago();
    }
}

let empleados = [];
empleados.push(new EmpleadoPlanta("201", "Maria", 1500000));
empleados.push(new Contratista("202", "Pedro", 1200000));
for (let i = 0; i < empleados.length; i = i + 1) {
    console.log(empleados[i].verNombre() + " recibe: " + empleados[i].calcularPago());
}
