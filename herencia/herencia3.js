/* en una clinica se necesita desarrollar un sistema para administrar el personal de la institucion en la clinica
existen diversos empleados entre ellos estan medico, enfermera y administrador cree el sistema para este problema */

class Empleados {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    verInfor() {
        alert("nombre: " + this.nombre);
    }
}

class Medico extends Empleados {
    constructor(nombre, apellido, edad, tipo) {
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }

    ver() {
        alert("medico " + this.tipo + " " + this.nombre + " " + this.apellido + " " + this.edad);
    }
}

class Enfermera extends Empleados {
    constructor(nombre, apellido, edad, tipo) {
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }
}

class Administrador extends Empleados {
    constructor(nombre, apellido, edad, tipo) {
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }
}


let empleado1;
let arregloEmpleado = [];

function aceptar() {
    let nombre = document.getElementById("name").value.trim();
    let apellido = document.getElementById("ape").value.trim();
    let edad = document.getElementById("edad").value;
    let tipo = document.getElementById("tipo").value;


    if (nombre === "" || apellido === "" || edad === "") {
        alert("Completa todos los campos");
        return;
    }


    if (tipo === "medico") {
        empleado1 = new Medico(nombre, apellido, edad, tipo);
    } else if (tipo === "enfermera") {
        empleado1 = new Enfermera(nombre, apellido, edad, tipo);
    } else {
        empleado1 = new Administrador(nombre, apellido, edad, tipo);
    }

    arregloEmpleado.push(empleado1);


    document.getElementById("name").value = "";
    document.getElementById("ape").value = "";
    document.getElementById("edad").value = "";

    alert("Empleado guardado correctamente");
}

function mostrarTablaDatos() {
    let tabla = document.getElementById("tabla");


    tabla.innerHTML = "";

    
    for (let i = 0; i < arregloEmpleado.length; i = i + 1) {
        tabla.innerHTML += `<tr>
            <td>${arregloEmpleado[i].nombre}</td>
            <td>${arregloEmpleado[i].apellido}</td>
            <td>${arregloEmpleado[i].edad}</td>
            <td>${arregloEmpleado[i].tipo}</td>
            <td>eliminar</td>
        </tr>`;
    }
}

function estilo() {
    document.getElementById("boton").style.transform = "scale(1.03)";
    document.getElementById("boton").style.background = "#a32b75d5";
    document.getElementById("boton").style.color = "white";
}

function botonfuera() {
    document.getElementById("boton").style.transform = "scale(1)";
    document.getElementById("boton").style.background = "#F0F0F0";
    document.getElementById("boton").style.color = "black";
}