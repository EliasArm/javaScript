/*
Operadores Lógicos
    && AND
    || OR
    ! NOT
*/

let name = 'Armando';
let age = 17;
let tiket = true;
let permiso = true;

let permitirAcceso = age >= 18 && tiket;

let permitirAcceso2 = (age >= 18 && tiket) || (permiso && tiket);

console.log('Acceso permitido al concierto: ', permitirAcceso);
console.log('Acceso permitido al concierto: ', permitirAcceso2);


let z = false;
console.log(!z);