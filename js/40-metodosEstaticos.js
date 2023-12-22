class Usuario {
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrar(usuario){
        if (this.nombre === usuario){
            this.nombre = ''; 
            console.log('Usuario eliminado');
        }else{
            console.log('El usuario no exite');
        }
    }

    static registados = 299;
}

// const usuario = new Usuario('Armando','mail@mail.com');
// console.log(usuario);
// usuario.borrar('Armando');
// console.log(usuario);

Usuario.borrar('Armando');
console.log(Usuario.registados);