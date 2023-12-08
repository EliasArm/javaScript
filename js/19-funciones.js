// Forma #1
function saludo(){
    console.log('Hola!');
}

// Forma #2 - Asignando la funcion a una variable
const saludo2 = function(name){
    console.log(`Hola ${name}, bienvenido`);
}
saludo2('Elias');

// Forma #3 - Funcion de tipo felcha
const saludo3 = () => console.log(`Hola!`);


const fecha = () => console.log(Date());
fecha();