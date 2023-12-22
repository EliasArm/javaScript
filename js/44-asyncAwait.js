const fetchPost = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const posts = ['Post1','Post2','Post3'];
            const error = true;
            if( error ){
                reject('Error al obtener los Posts');
            }else {
                resolve(posts);
            }
        } , 2500);
    } );
};

const mostrarPost = async () => {
    try{
        const posts = await  fetchPost();
        console.log(posts);
    } catch(errores){
        console.log(errores);
    }
};

mostrarPost();