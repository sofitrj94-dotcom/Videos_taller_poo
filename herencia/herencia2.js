class Vehiculo{
    marca
    modelo

    constructor(marca,modelo){
    this.marca=marca
    this.modelo=modelo
    }

    informacion(){
        console.log(this.marca+this.modelo);
        
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,tipo){
        super(marca,modelo)
        this.tipo=tipo
    }
    
    ver(){
        console.log("clase hija de vehiculo")
    }
}

let yamaha=new Moto("Yamaha",2026,"electrica")
yamaha.informacion()
yamaha.ver()