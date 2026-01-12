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

// Arrays
let nombres = ["Victor", "Francisco", "Pepe", "Neasaka"];

// Seleccionar elementos de la pagina
let divNombres = document.querySelector("#nombres");
//divNombres.innerHTML = nombres[1]; // Los indices se componen asi: [0, 1, 2];

// Concatenacion:
let concatenacion = nombre + " " + apellido;
let altura2 = 180;

// Seleccionar elementos de la pagina:
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h2>Soy la caja de datos</h2>
    <h3>Mi nombre es: ${nombre} ${apellido}</h3>
`

// Condicionales:
altura2 = 185;

if(altura2 >= 185){
    datos.innerHTML += "<h3>Eres una persona alta</h3>";
} else {
    datos.innerHTML += "<h3>Eres una persona baja</h3>";
}

// Bucles:
// for(inicializador; condicion; modificador){}
for(let year = 2000; year <= 2023; year++){
    datos.innerHTML += `<h4>Estamos en el año: ${year} </h4>`;
}

divNombres.innerHTML = `<h1>Listado de nombres</h1><ul>`

// Recorre todos los nombres
nombres.forEach(nombre => {
    divNombres.innerHTML += `<li>${nombre}</li>`;
});

divNombres.innerHTML += `</ul>`;

// Funciones:
const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h2>Soy la caja de datos para funciones</h2>
        <h3>Mi nombre es: ${nombre}</h3>
        <h3>Altura: ${altura} cm</h3>
    `;

    return misDatos;
};

const imprimir = () => {
    let datos = document.querySelector("#funciones");
    datos.innerHTML = miInformacion("Satou Matsuzaka", 158);
};

// Llamamos a la funcion imprimir:
imprimir();

// Mostrar en consola:
console.log(altura);


