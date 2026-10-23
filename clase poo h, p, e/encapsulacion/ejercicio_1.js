// consiste en proteger los datos de un objeto 
// cuenta bancaria saldo clases a la que pertenece #saldo 


class CuentaBancaria{
    // propiedad protegida 
    #numeroCuenta 
    #saldo
    fechaCreacion 
    constructor(numeroCuenta,saldo,fechaCreacion){
    
    this.#numeroCuenta=numeroCuenta
    this.#saldo=saldo
    this.fechaCreacion=fechaCreacion
}

depositar(valor){
    //return 
    this.#saldo = this.#saldo + valor
    console.log("el saldo de mi cuenta es: " + this.#saldo);
    return this.#saldo

}

retirar(valor){
    this.#saldo = this.#saldo - valor
    return this.#saldo
}

info(){
    return this.#numeroCuenta + " " + this.#saldo + " " + this.fechaCreacion
}
mostrarSaldo() {
    return this.#saldo
}

}

function guardar() {
    let cuenta = document.getElementById("cuenta").value
    let saldo = Number(document.getElementById("saldo").value)
    let fecha = document.getElementById("fecha").value
    let valor = Number(document.getElementById("valor").value)
    let info = document.getElementById("info")
    let valorRetirar = Number(document.getElementById("valorRetirar").value)

    let bancoSofi = new CuentaBancaria(cuenta, saldo, fecha)
    bancoSofi.depositar(valor)
    info.textContent = bancoSofi.info()
    let saldito = bancoSofi.retirar(valorRetirar)
    console.log(saldito)
    document.getElementById("saldito").value = bancoSofi.mostrarSaldo()
}

