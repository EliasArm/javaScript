
const user = {
    name: 'Tania',
    age: 20,
    email: 'tania@mail.com',
    amigos: ['Isai','Pamela','Gilberto'],
    saludo: () => {
        console.log('Hola!');
    }
};

/**
 *  Metodos propios
 *  Los objetos pueden tener métodos personalizados
*/
user.saludo();


/**
 *  Objects.keys()
 *  Nos devuelve un arreglo con las llaves (keys) del objeto 
*/

const llaves =  Object.keys(user)
console.log(llaves);


/**
 *  Object.values()
 *  Nos devuelve un arreglo con los valores (values) del objeto
*/

const valores = Object.values(user)
console.log(valores);


/**
 *  Object.entries()
 *  Nos devuelve un arreglo con las parejas de clave y valor del objeto
*/

const resultado = Object.entries(user);
console.log(resultado);

console.log(`El objeto user tiene ${resultado.length} propiedades`);