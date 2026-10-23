// 1. SISTEMA DE CUENTAS BANCARIAS
class CuentaBancaria {
    #numero;
    #titular;
    #saldo;

    constructor(numero, titular, saldo) {
        this.#numero = numero;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    consignar(valor) {
        if (valor <= 0) {
            console.log("La consignación debe ser mayor que cero");
            return;
        }
        this.#saldo = this.#saldo + valor;
    }

    retirar(valor) {
        if (valor <= 0) {
            console.log("El retiro debe ser mayor que cero");
            return;
        }
        if (valor > this.#saldo) {
            console.log("No hay saldo suficiente");
            return;
        }
        this.#saldo = this.#saldo - valor;
    }

    verSaldo() {
        return this.#saldo;
    }

    verInfo() {
        return "Cuenta: " + this.#numero + ", Titular: " + this.#titular + ", Saldo: " + this.#saldo;
    }
}

class CuentaAhorros extends CuentaBancaria {
    retirar(valor) {
        console.log("Retiro de cuenta de ahorros");
        super.retirar(valor);
    }
}

class CuentaCorriente extends CuentaBancaria {
    retirar(valor) {
        console.log("Retiro de cuenta corriente");
        super.retirar(valor);
    }
}

let cuentas = [];
let cuenta1 = new CuentaAhorros("001", "Sofia", 500000);
let cuenta2 = new CuentaCorriente("002", "Carlos", 300000);
cuentas.push(cuenta1);
cuentas.push(cuenta2);
cuenta1.consignar(50000);
cuenta2.consignar(600000);

for (let i = 0; i < cuentas.length; i = i + 1) {
    console.log(cuentas[i].verInfo());
}
