const fetchPost = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            const posts = ['Post1','Post2','Post3'];
            const error = true;
            if( error ){
                reject('Error al obtener post del usuario.');
            } else {
                resolve(posts);
            }
        }, 2500);
    });
};

fetchPost().then((posts) => {
    for( let i = 0; i < posts.length; i++){
        console.log(`Post número ${i+1} es ${posts[i]}`);
    }
}).catch( (error) => {
    console.log(error);
} );

