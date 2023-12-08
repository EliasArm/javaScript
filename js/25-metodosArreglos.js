console.log('----- Metodos Arreglos -----');

const colores = ['azul','rojo','verde','amarillo','blanco'];

/*
    .length
    (propiedad) - Nos permite conocer la cantidad de elementos en un arreglo.
*/
console.log(colores.length);


/* 
    .toString()
    Nos permite transformar un arreglo a una cadena de caracteres de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/
colores.toString();
// document.body.innerHTML = colores.toString();


/* 
    .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento
*/
console.log(colores.join('- -'));


/**
 *  .sort
 *  Nos permite ordenar un arreglo de candenas de texto, de forma alfabetica.
*/
let orden = colores.sort();
console.log(orden);

const num = [5,8,7,1,3,4,2,6,9,0];
console.log(num.sort());


/**
 *  .reverse()
 *  Nos permite ordenar un arreglo de forma descendente.
*/
console.log(colores.reverse());
console.log(num.reverse());


/**
 *  .concat()
 *  Nos permite juntar dos arreglos en uno solo 
*/
const arreglo1 = [1,2,3];
const arreglo2 = ['a','b','c'];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

/**
 *  .push()
 *  Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Negro');
console.log(colores);


/**
 *  .pop()
 *  Nos permite eliminar el ultimo elemento de un arreglo.
*/
colores.pop();
console.log(colores);
