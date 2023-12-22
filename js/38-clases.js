/**  
 *  Estructura de una clase:
 *  -Definición: Nombre de identificación de la clase. Inicia con mayuscula.
 *  -Propiedades: la clase puede contener variables. Dentro de una clase de llaman propiedades.
 *  -Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
 *  -Métodos: la calse puede contener funcione. Dentro de una clase se llaman metodos.
*/

class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        console.log('Nuevo usuario registrado');
    }

    obtenerNombreCompleto(){
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}

const usuario = new Usuario ('Elias','Armando');
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.obtenerNombreCompleto());

const user = new Usuario('Nora','Hilda');
console.log( user.obtenerNombreCompleto() );