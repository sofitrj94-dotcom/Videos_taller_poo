// 10. ADOPCIÓN Y CUIDADO DE MASCOTAS
class Mascota {
    #identificador;
    #nombre;
    #edad;
    #adoptada;

    constructor(identificador, nombre, edad, adoptada) {
        this.#identificador = identificador;
        this.#nombre = nombre;
        this.#edad = edad;
        this.#adoptada = adoptada;
    }

    verNombre() {
        return this.#nombre;
    }

    adoptar() {
        if (this.#adoptada === true) {
            console.log(this.#nombre + " ya fue adoptado");
            return;
        }
        this.#adoptada = true;
        console.log(this.#nombre + " fue adoptado");
    }

    describirCuidados() {
        return "Necesita alimento, agua y atención";
    }
}

class Perro extends Mascota {
    describirCuidados() {
        return "Necesita paseos, alimento y agua";
    }
}

class Gato extends Mascota {
    describirCuidados() {
        return "Necesita arenero limpio, alimento y agua";
    }
}

let mascotas = [];
let solicitudesAdopcion = [];
mascotas.push(new Perro("P01", "Max", 3, false));
mascotas.push(new Gato("G01", "Luna", 2, false));
solicitudesAdopcion.push("Solicitud para Max");
for (let i = 0; i < mascotas.length; i = i + 1) {
    console.log(mascotas[i].verNombre() + ": " + mascotas[i].describirCuidados());
}
mascotas[0].adoptar();
