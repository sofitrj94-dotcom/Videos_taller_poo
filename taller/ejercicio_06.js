// 6. BIBLIOTECA Y PRÉSTAMOS
class Recurso {
    #codigo;
    #titulo;
    #disponible;

    constructor(codigo, titulo, disponible) {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#disponible = disponible;
    }

    verTitulo() {
        return this.#titulo;
    }

    prestar() {
        if (this.#disponible === false) {
            console.log("El recurso no está disponible");
            return;
        }
        this.#disponible = false;
        console.log("Préstamo realizado:", this.#titulo);
    }

    devolver() {
        this.#disponible = true;
        console.log("Recurso devuelto:", this.#titulo);
    }

    plazoPrestamo() {
        return 7;
    }
}

class LibroImpreso extends Recurso {
    plazoPrestamo() {
        return 14;
    }
}

class RecursoDigital extends Recurso {
    plazoPrestamo() {
        return 7;
    }
}

let recursos = [];
let prestamos = [];
let libro = new LibroImpreso("L01", "El principito", true);
let recurso = new RecursoDigital("D01", "Manual digital", true);
recursos.push(libro);
recursos.push(recurso);
libro.prestar();
prestamos.push(libro);
for (let i = 0; i < recursos.length; i = i + 1) {
    console.log(recursos[i].verTitulo() + " - plazo: " + recursos[i].plazoPrestamo() + " días");
}
