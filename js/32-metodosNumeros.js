const num = 10;

/** 
 *  .toString()
 *  Permite transformar unvalor de tipo número a una cadena de texto
*/
console.log(num, typeof num);
const texto = num.toString();
console.log(texto, typeof texto);

/** 
 *  .toFixed()
 *  Permite obtener un número con la cantidad de decimales especificados
*/
const pi = 3.14159265;
console.log(pi.toFixed(4));

/** 
 *  parseInt()
 *  Intenta transformar un valor a un entero
*/
// const num1 = parseInt(prompt('Escribe un número: '));
// const num2 = parseInt(prompt('Escribe otro número: '));
// console.log(num1 + num2);

/** 
 *  parseFloat()
 *  Intenta transformar un valor a un número con decimales.
*/
// const n1 = parseFloat(prompt('Escribe un número: '));
// const n2 = parseFloat(prompt('Escribe otro número: '));
// console.log(n1+n2);

/** 
 *  Math.random()
 *  Genera un número al azar entre 0 y 1
*/
const num3 = Math.random();
console.log(num3);

/** 
 *  Mth.floor()
 *  Redondea hacia abajo un número.
*/
console.log(Math.floor(10.5));

/** 
 *  Math.ceil()
 *  Redondea hacia arriba un número.
*/
console.log(Math.ceil(10.5));

/** 
 *  Math.round()
 *  Redondea hacia el entero mas cercano
*/
console.log(Math.round(10.4));
console.log(Math.round(10.5));


/**
 *  Ejemplo
 *  Numero al azar entre o y 100
*/

const num4 = Math.random();

console.log(Math.floor(num4 * 101));