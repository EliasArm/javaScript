const names = ['Carlos','Christian','Christoper','Estefania','Erika','Manuel','Alejandro','Jonathan','Pilar','Leticia', 'Diego'];

// names.forEach( (name) => {
//     console.log(`Hola ${name}, mucho gusto`);
// } );

/** 
 *  Ciclo For
 *  Repite un bloque de código mientras se cumpla una condición.
 *  
 *  Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
 *  Expresión 2: Una condición, mientras se cumpla se ejecutará el bloque de código.
 *  Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque del codigo. 
*/
console.log('----- De 5 en 5 hasta el 100 -----');
for( let i = 0; i <= 100; i += 5){
    console.log(i);
}
console.log('---------------------------------');

console.log('---------- De 50 a 0 ------------');

for ( let i = 50; i >= 0; i--){
    console.log(i);
}
console.log('---------------------------------');

console.log('--- Recorrido del arreglo nombres ---');

for (let i = 0; i < names.length; i++ ){
    console.log(names[i]);
}
console.log('---------------------------------');
