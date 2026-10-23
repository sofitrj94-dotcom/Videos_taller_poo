class Persona{
    Nombre 
    apellido 
    direccion
    telefono

    constructor(nombre, apellido,direccion,telefono){
        this.nombre=nombre
        this.apellido=apellido
        this.direccion=direccion
        this.telefono=telefono
    }

    verInfo(){
        console.log("ver informacion persona" + this.nombre + this.apellido + this.direccion + this.telefono);
        
    }
}

class Aprendiz extends Persona{
    informacion(){
    console.log("soy un aprendiz")
}
}

let juan=new Aprendiz("juan", "martinez", "123", 123)
juan.verInfo()
