// 4. AGENDA DE CITAS MÉDICAS
class Profesional {
    #identificacion;
    #nombre;
    #disponible;

    constructor(identificacion, nombre, disponible) {
        this.#identificacion = identificacion;
        this.#nombre = nombre;
        this.#disponible = disponible;
    }

    verNombre() {
        return this.#nombre;
    }

    verDisponibilidad() {
        return this.#disponible;
    }

    duracionConsulta() {
        return 20;
    }
}

class MedicoGeneral extends Profesional {
    duracionConsulta() {
        return 20;
    }
}

class Especialista extends Profesional {
    duracionConsulta() {
        return 40;
    }
}

let profesionales = [];
let citas = [];
profesionales.push(new MedicoGeneral("101", "Laura", "Disponible"));
profesionales.push(new Especialista("102", "Andres", "Disponible"));
citas.push("Cita de Laura");
citas.push("Cita de Andres");
for (let i = 0; i < profesionales.length; i = i + 1) {
    console.log("Profesional:", profesionales[i].verNombre());
    console.log("Duración de consulta:", profesionales[i].duracionConsulta(), "minutos");
}
