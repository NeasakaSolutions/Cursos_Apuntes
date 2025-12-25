/* Operadores logicos
    && And
    || Or
    ! Not
*/

// Datos:
const usuarios = {
    uno : {
        nombre: 'Neasaka',
        edad: 23,
        entrada: true,
        permiso: true,
    },

    dos : {
        nombre: 'Carlos',
        edad: 18,
        entrada: false,
        permiso: true,
    },
};

// Variables:
let usuario; // Global para la funcion

// Operaciones
function acceso(){
    // Variables
    const esMayorDeEdad = usuario.edad >= 18;
    const tieneEntrada = usuario.entrada;
    const tienePermiso = usuario.permiso;

    // Operaciones
    const accesoPermitido = (esMayorDeEdad && tieneEntrada) || tienePermiso;

    // Resultado
    return accesoPermitido;

};

// Impresion de resultados:
usuario = usuarios.uno;
console.log(`Acceso del usuario ${usuario.nombre}: ${acceso(usuario)}`);
usuario = usuarios.dos
console.log(`Acceso del usuario ${usuario.nombre}: ${acceso(usuario)}`);


