/**
 *  Ciclo While
 *  Es similar a for, pero con la diferencia que solo tenemos un condicional.
 *  Mientras se cumpla el condicional se ejecuta el ciclo.
 */

let cont = 0;

while( cont <= 10 ){
    console.log(cont)
    cont++;
}

console.log('--- -- --- -- --- -- --- -- ---');
console.log(' ');

/** 
 *  Coclo Do While
 *  Es similar al ciclo while, con la diferencia de que ejecuta el bloque de codigo al menos una vez.
*/

let cont2 = 100;

do {
    console.log(cont2);
    cont2++;
} while (cont2 <= 10)