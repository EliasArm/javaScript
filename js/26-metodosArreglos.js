console.log('----- Metodos Arreglos -----');

const dias = ['lunes', 'martes', 'miercoles','jueves','viernes','sabado','domingo'];
console.log(dias);

/**
 *  .shift()
 *  Elimina el primer elemento de un arreglo y recorre los elementos
*/
console.log('-------- .shift() --------');
const diaEliminado = dias.shift();
console.log(`Dia eliminado ${diaEliminado}`);
console.log(dias);
console.log(`Ahora el primer día es ${dias[0]}`);

/**
 *   unsift()
 *  Agrega un elemento al inicio del arreglo y empuja los elementos
*/
console.log('-------- .unshift() --------');
const addDay = dias.unshift('Armando');
console.log(dias);

/**
 *  .splice()
 *  Nos permite insertar elementos a un arreglo donde le especifiquemos.
 *  - 1er parametro - posición donde queremos comenzar a insertar los elementos.
 *  - 2do parametro - si queremos eliminar elementos del arreglo desde la posición indicada
 *  - Resto de parametros - los elementos a insertar 
*/
console.log('-------- .splice() --------');
const months = ['Enero','Febrero','Marzo','Abril','Mayo']
console.log(months);
months.splice(1,3,'Diciembre')
console.log(months);


/** .slice() 
 *  Nos permite copiar una parte de un arreglo a otro.
 *  - 1er parametro - Posición desde donde queremos copiar
 *  - 2do parametro - Hasta antes de que elemento copiar
*/
console.log('-------- .slice() --------');
const friends = ['Cesar', 'Jose Carlos', 'Randall', 'Angelica', 'Pato' ];
console.log(friends);
const copyFriends = friends.slice(3, friends.length);
console.log(copyFriends);