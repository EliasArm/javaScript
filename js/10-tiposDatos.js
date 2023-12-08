
let nombre = 'Elías';

let age = 35;

let isActive = false;

let heroes = ['Wolverine', 'Dr. X', 'Beast', 'Gambit'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let person = {
    name: 'Armando',
    age: '35',
    car: {
        brand: 'Mazda',
        color: 'White',
    }
}

function hola(saludo) {
    // let saludo = 'Hola';
    let names = ['Pamela', 'Isai', 'Tania']
    for (let i = 0; i < names.length; i++) {
        console.log(i + 1 + ' ' + saludo + ' ' + names[i]);
    }
}

console.log(nombre, age, isActive);
console.log(heroes);
console.log(person);
hola('Hola');
hola('Adios');