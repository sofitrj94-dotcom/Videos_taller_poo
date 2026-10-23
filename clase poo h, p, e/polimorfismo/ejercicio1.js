//polimorfismo 
// una clase tiene un mismoo metodo con el mismo nombre pero comportamiento diferente 
//set => establece, cambiar valores de una determinada propiedad 
//get => extraer el valor de una propiedad 


class Moto {
    cilindraje
    #marca
    constructor(){}
    setCilindraje(){
        this.cilindraje=nuevoCilindraje

    }

    getCilindraje(){
        return this.cilindraje
    
    setMarca(marquita)
    {
        this.#marca=marquita
    }

    getMarca() 
    {
    return this.#marca
    }
}

    Velocidad(){
        console.log("velocidad de la moto mayor al del auto");
        
    }
}

class Auto extends Moto{
    constructor(){

    }
    velocidad() {
        console.log("esta es la velocidad del auto");
        
    }
}


let motico=new Moto()
motico.setCilindraje(300)
let resultado=motico.getCilindraje()
console.log(resultado);
motico.setMarca("yamaha")
let solucion=motico.getCilindraje()
console.log(solucion);
motico.cilindraje=200
//motico.#marca
let autico=new Auto()
autico.velocidad()


