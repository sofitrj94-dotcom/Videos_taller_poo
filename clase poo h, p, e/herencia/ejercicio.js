class Empleados {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    verinfo() {
        alert("Nombre: " + this.nombre);
    }
}

class Medico extends Empleados {
    constructor(nombre, apellido, edad, tipo) {
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }

    ver() {
        alert("Medico: " + this.tipo + " " + this.nombre);
    }
}

class Enfermera {

}

class Administrador {

}

let empleado1;

function aceptar() {
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("ape").value;
    let edad = document.getElementById("edad").value;
    let tipo = document.getElementById("tipo").value;

    empleado1 = new Medico(nombre, apellido, edad, tipo);

    mostrarTablaDatos();
}

function mostrarTablaDatos() {
    let tabla = document.getElementById("tabla");

    if (empleado1 == undefined) {
        alert("Primero debes registrar un empleado");
        return;
    }

    let arregloEmpleados = [];
    arregloEmpleados.push(empleado1);

    console.log(arregloEmpleados);

    tabla.innerHTML = "";

    for (let i = 0; i < arregloEmpleados.length; i = i + 1) {
        tabla.innerHTML += `<tr>
            <td>${arregloEmpleados[i].nombre}</td>
            <td>${arregloEmpleados[i].apellido}</td>
            <td>${arregloEmpleados[i].edad}</td>
            <td>${arregloEmpleados[i].tipo}</td>
            <td>Campo</td>
            <td></td>
            <td>Medico</td>
            <td>Eliminar</td>
        </tr>`;
    }
}

function estilo() {
    document.getElementById("boton").style.transform = "scale(1.03)";
    document.getElementById("boton").style.background = "lightblue";
    document.getElementById("boton").style.color = "white";
}

function botonfuera() {
    document.getElementById("boton").style.transform = "scale(1)";
    document.getElementById("boton").style.backgroundColor = "#F0F0F0";
    document.getElementById("boton").style.color = "black";
}