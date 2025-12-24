// Cadena de texto
const nombre = 'Neasaka';
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';
// Funcion repeat para generar un separador
const salto = '-'.repeat(50);
// Forma correcta de repetir las comillas:
const parrafo3 = 'Este es un \'parrafo\'';

// Numero
const numero = 4;
const numero2 = -4.123;

// Booleano
const usuarioConectado = true;
const mayorQue = 1 > 2; // FALSE

// Arrays - Arreglos
const arreglo = [1, 10, 5, "texto", true, {propiedad: 'valor'}, [1, 2, 3]];

// Objetos
const persona = {
    nombre: 'Neasaka',
    edad: 23,
    carro: {
        marca: '...',
        color: 'blanco',
    },
};

// Function
function hola(){
    console.log('Texto dentro de la funcion.');
}

// Null - sirve para resetear el valor de la variable
const miVariable = null;

// Undefined
const miVariable2 = undefined;

// Impresion de resultados:
console.log("Cadena de texto: ");
console.log(nombre);
console.log(parrafo);
console.log(parrafo2);
console.log(parrafo3);
console.log(salto);
console.log("Numero: ");
console.log(numero);
console.log(numero2);
console.log(salto)
console.log("Booleano: ");
console.log(usuarioConectado);
console.log(mayorQue);
console.log(salto);
console.log("Arrays - Arreglos: ")
console.log(arreglo);
console.log(salto);
console.log("Objetos: ");
console.log(persona);
console.log(persona.carro.color);
console.log(salto);
console.log("Funciones: ");
// Llamamos a la funcion
hola();
console.log(salto)
console.log("Null: ");
console.log(miVariable);
console.log(salto);
console.log(miVariable2);
console.log(salto);

