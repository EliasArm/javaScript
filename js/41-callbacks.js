const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario} ...`);

    setTimeout(() => {
        let post = ['Post1','Post2','Post3'];
        callback(post);
    }, 2000);
};

obtenerPostDeUsuario('carlos', (post) => {
    console.log(post);
});