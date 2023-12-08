// Global Scope o Variables Globales
// -Son las variables declaradas fuera de una función
// -Podemos acceder a ellas desde cualquier parte del código
// -Podemos usar const, let y var

let firstName = 'Elías';
console.log(firstName);

const saludar = () => {
    
    console.log(`Hola ${firstName}`);

    firstName = 'Armando'
    saludo = console.log(`El nuevo nombre es: ${firstName}`);
   
    return saludo;
}

saludar();