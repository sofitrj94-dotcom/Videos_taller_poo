// 9. SISTEMA DE RESERVAS TURÍSTICAS
class Reserva {
    #codigo;
    #cliente;
    #fecha;
    #precio;

    constructor(codigo, cliente, fecha, precio) {
        this.#codigo = codigo;
        this.#cliente = cliente;
        this.#fecha = fecha;
        this.#precio = precio;
    }

    verCliente() {
        return this.#cliente;
    }

    calcularCosto() {
        if (this.#precio < 0) {
            console.log("El precio no puede ser negativo");
            return 0;
        }
        return this.#precio;
    }

    cancelar() {
        return "La reserva fue cancelada";
    }
}

class ReservaHotel extends Reserva {
    calcularCosto() {
        return super.calcularCosto() + 20000;
    }

    cancelar() {
        return "La reserva del hotel fue cancelada según sus condiciones";
    }
}

class RecorridoTuristico extends Reserva {
    calcularCosto() {
        return super.calcularCosto() + 10000;
    }

    cancelar() {
        return "El recorrido turístico fue cancelado según sus condiciones";
    }
}

let reservas = [];
reservas.push(new ReservaHotel("R01", "Sofia", "2026-11-10", 150000));
reservas.push(new RecorridoTuristico("R02", "Carlos", "2026-11-12", 80000));
for (let i = 0; i < reservas.length; i = i + 1) {
    console.log("Reserva de " + reservas[i].verCliente() + ": $" + reservas[i].calcularCosto());
    console.log(reservas[i].cancelar());
}
