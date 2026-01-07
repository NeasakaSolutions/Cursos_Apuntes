// Alertas:
//alert("Ijole desde el main");

// Variables:
let nombre = "Nea"; // Se puede modificar el valor desde donde sea
console.log(nombre);
nombre = "Neasaka";
console.log(nombre);
let apellido = "Pendragon"

// Constante
const altura = 173; // No se puede cambiar el valor

// Concatenacion:
let concatenacion = nombre + " " + apellido;

// Seleccionar elementos de la pagina:
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h2>Soy la caja de datos</h2>
    <h3>Mi nombre es: ${nombre} ${apellido}</h3>
`

// Mostrar en consola:
console.log(altura);

