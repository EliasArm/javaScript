

const texto = 'Hola Tania Mercado González';

/**
 *  .length
 *  Devuelve el número de caracteres de una cadena de texto.
*/
console.log(texto.length);
console.log(`El texto: "${texto}" tiene ${texto.length} caracteres`);

/** 
 *  .indexOf() 
 *  Devuelve el index del primer caracter especificado.
*/
console.log(texto.indexOf('a'));

/** 
 *  .lastIndexOf()
 *  Devuelve el index del último caracter especificado.
*/
console.log(texto.lastIndexOf('a'));

/** 
 *  .slice()
 *  Devuelve un fragmento de una cadena de texto.
 *  1er parametro: index desde donde queremos cortar
 *  2do parametro: index hasta donde queremos cortar
*/
console.log(texto.slice(19));
console.log(texto.slice(5,10));
const index = texto.indexOf('T');
const lastIndex = texto.lastIndexOf('z');
console.log(texto.slice(index, lastIndex + 1));

/** 
 *  .replace()
 *  Devuelve una cadena de texto en donde remplaza un valor por otro.
 *  1er parametro: el texto que queremos reemplazar.
 *  2do parametro: el texto que queremos poner.
*/
const remplazar = 'Tania Mercado';
const nuevo = 'Pamela Lopez';
const nuevoTexto = texto.replace(remplazar,nuevo);
console.log(nuevoTexto);

/** 
 *  .split()
 *  Convierte una cadena de texto en un arreglo
 *  Tenemos que especificar donde cortar cada elemento
 *  1er parametro: el caracter que funcionara como separador.
*/
console.log(texto.split(' '));

/** 
 *  .toUpperCase()
 *  Devuelve una cadena de texto con puras mayusculas
*/
console.log(texto.toUpperCase())

/** 
 *  toLowerCase()
 *  Devuelve una cadena de texto con puras minusculas
*/
console.log(texto.toLowerCase());