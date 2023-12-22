/** 
 *  Operador Spread
 *  Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio
*/
const frutas = ['Sandia','Uva','Melon','Manzana','Naranja'];
const comidaFav = ['Pizza','Pasta','Pan', ...frutas];
console.log(comidaFav);


const datosLogin = {
    userName: 'armand@mail.com',
    password: '123098'
}

const user = {
    name: 'Elías',
    ...datosLogin,
    age: 35
}
console.log(user);


/** 
 *  Parametro Rest
 *  Permite que una funcion contenga un número indefinido de rgumentos.
 * Los argumentos extra que encuentre los convertira en un arreglo.
*/

const registraUsuario = (usuario, correo, ...datosAdicionales) => {
    console.log(usuario, correo, datosAdicionales);
}
registraUsuario('Armando','armando@mail.com');
registraUsuario('Elías', 'elias@mail.com', 35, 'México');


/** 
 *  Destructuración de objetos
 *  Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
*/
const amigos = ['Cesar','Jose Carlos','Hector'];
// const primerAmigo = amigos[0];
const[primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);

const persona = {
    nombre: 'Francisco',
    edad: 30,
    pais: 'México'
}
const { nombre, pais, edad } = persona;
console.log(nombre, edad, pais);

const muestraDatos = (nombre, edad, pais) => {
    console.log(`${nombre} tiene ${edad} años y es de ${pais}`);
}
// muestraDatos(persona.nombre, persona.edad, persona.pais); // Sin Destructuración
muestraDatos(nombre,edad,pais);

const muestraPersona = ({nombre,edad,pais}) => {
    console.log(`${nombre} tiene ${edad} años y es de ${pais}`);
}
muestraPersona(persona);