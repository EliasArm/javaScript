/*
    Local Scope o Variables locales
    -Son las variables declaradas dentro de una función.
    -Solo podemos acceder a ellas dentro de la funcion.
*/

const charactersName = (firstName) => {
    let character = firstName.length;
    console.log(`${firstName} tiene ${character} letras`);

    const funcionAnidada = () => {
        console.log(character);
    };
    funcionAnidada();
}


charactersName('Elías');