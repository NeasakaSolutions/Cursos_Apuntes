/* Operadores Aritmeticos
    = Operador de asignacion. Se usa para asignar valores a una variable
    + Suma
    - Resta
    * Multiplicacion
    / Division
    % Modulo
    ++ Aumento
    -- Disminucion
*/

/* Operadores de asignacion
    += Suma un numero al valor de una variable
    -= Resta un numero al valor de una variables
    *= Multiplica un numero al valor de una variable
    /= Divide un numero al valor de una variale
    %= Obtiene el sobrante de una division y lo asigna a una variable
*/

/* Operadores de comparacion
Nos permite comparar valores:
    == Igual que
    === Igual en valor y tipo de valor
    != Diferente
    !== Diferente en valor y tipo de valor
    > Mayor que
    < Menor que
    >= Mayor o igual que
    <= Menor o igual que 
    ? Operador ternario
*/

// Variables:
const salto = "-".repeat(50);
const numero1 = 5;
const numero2 = 10;
const numero3 = 3;
const texto1 = "10";
let numero4 = 4; // Se pone let para poder acceder a desde la funcion
let suma;
let resta;
let modulo;

// Operaciones
suma = numero1 + numero2;
resta = numero1 - numero2;
modulo = numero2 % numero3;

// Funciones de aumento:
function aumento(){
    // Aumenta en 1
    numero4++;
    return numero4;
}

// Funcion de disminucion:
function disminucion(){
    // Disminuye en 1
    numero4--;
    return numero4;
}

// Operadores de comparacion
const comparacion1 = numero2 < numero1 // False
const comparacion2 = numero2 > numero1 // True
const comparacion3 = numero2 == numero1 // False
const comparacion4 = numero2 === texto1 // False
const comparacion5 = numero2 < numero1 ? `El numero ${numero2} es menor a ${numero1}` : `El numero ${numero2} es mayor a ${numero1}`;


// Impresion de resultados:
console.log("Suma: ");
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
console.log(salto);
console.log("Resta: ");
console.log("La resta de " + numero1 + " y " + numero2 + " es: " + resta);
console.log(salto);
console.log("Modulo: ");
console.log("El modulo de " + numero2 + " y " + numero3 + " es: " + modulo);
console.log(salto);
console.log("Aumento: ");
console.log("El aumento del numero " + numero4 + " es: " + aumento());
console.log(salto);
console.log("Disminucion: ");
console.log("La disminucion del numero " + numero4 + " es: " + disminucion());
console.log(salto);
console.log("Operadores de comparacion: ")
console.log("El numero " + numero2 + " es menor a " + numero1 + ": " + comparacion1);
console.log("El numero " + numero2 + " es mayor a " + numero1 + ": " + comparacion2);
console.log("El numero " + numero2 + " es igual a " + numero1 + ": " + comparacion3);
console.log("El numero " + numero2 + " es igual a " + texto1 + " en valor y en tipo: " + comparacion4);
console.log(comparacion5)
