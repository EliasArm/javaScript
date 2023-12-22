class Usuario {
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderador extends Usuario {
    constructor(userName, password, permisos){
        super(userName, password);
        this.permisos = permisos;
    }

    borrarPost(idPost){
        if( this.permisos.includes('borrar') ){
            console.log(`El post con el id ${idPost} ha sido borrado`);
        } else{
            console.log('No tienes los permisos para borrar posts');
        }
    }
}

const usuario = new Usuario('sora', '123');
console.log(usuario.obtenerPosts());

const moderador = new Moderador('sony', '987', ['borrar','editar']);
console.log( moderador.obtenerPosts() );
console.log(moderador);
console.log(moderador.permisos);
moderador.borrarPost(12);