
const saludo = (name = 'Tania') => {
    console.log(`Hola ${name}!`);
};

saludo('Elías');
saludo('Armando');
saludo('Isai');
saludo();



// Multiples parametros
console.log('----- ----- ----- -----');

const calculadora = (a, b) => {
    suma = a + b;
    resta = a - b;
    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
}

calculadora(10, 5);
calculadora(10, 20);

console.log('----- ----- ----- -----');

const calculadora2 = (tipo, num1, num2) => {
    if (tipo === 'suma'){
        const suma = num1 + num2;
        console.log(`La suma de los numeros ${num1} y ${num2} es: ${suma}`);
    }
    if (tipo === 'resta'){
        const resta = num1 - num2;
        console.log(`La resta de los numeros ${num1} y ${num2} es: ${resta}`);
    }
}


calculadora2('suma', 7, 8);
calculadora2('resta', 9, 9);


