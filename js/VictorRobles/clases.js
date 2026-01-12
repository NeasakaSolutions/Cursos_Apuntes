// Estructura de una clase
class Coche{
    constructor(modelo, velocidad, antiguedad){ // Cualidades de la clase
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    };

    // Metodos de la clase
    aumentarVelocidad(){
        this.velocidad += 1;
    };

    reducirVelocidad(){
        this.velocidad -= 1;
    };
};

// Herencia:
class Bus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    };

    // Metodos:
    mostrarAltura(){
        return "La altura del bus es: " + this.altura;
    }
};

// Creacion de los objetos:
var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 250, 2020);
var coche4 = new Coche('Renault', 350, 2023);

var bus1 = new Bus('PEGASUS', 150, 2002);

// Impresion de los resultados:
console.log(coche1);
document.querySelector("#datos").innerHTML = `<h1>Velocidad: ${coche1.velocidad}</h1>`;
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.querySelector("#datos").innerHTML = `<h1>Velocidad: ${coche1.velocidad}</h1>`;
console.log(coche1);
console.log(coche2);
console.log(bus1);
console.log(bus1.mostrarAltura());
