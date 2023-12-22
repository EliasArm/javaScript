/** 
 *  Ciclo forEach
 *  Es un metodo de los arreglos que podemos usar para recorrer los elementos
*/
const names = ['Elías','Leticia','Alfredo','Magaly','Fernando'];
names.forEach( (name, index) => console.log(`El amigo #${index + 1 } es ${name}`) );


/** 
 *  Ciclo for in
 *  Nos permite recorrer las propiedades de un objeto
*/
const persona = {
    nombre: 'Valentin', 
    edad: 25,
    correo: 'valentin@mail.com'
};

for ( propiedad in persona ){
    console.log('Hola!');
}

for(propiedad in persona){
    console.log(propiedad);
};

for( propiedad in persona ){
    console.log(persona[propiedad]);
};

for( propiedad in persona ){
    console.log( propiedad, persona[propiedad] );
}

/**  
 *  Ciclo for of
 *  Nos permite recorrer los valores de un objeto iterable.
 *  Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc.
*/
const etiquetas = document.head.children;
console.log(etiquetas);

for( elemento of etiquetas ){
    console.log(elemento);
}

/**  
 *  Transformar etiquetas a un arreglo
*/

const arregloEtiquetas = [...etiquetas]
console.log(arregloEtiquetas);
arregloEtiquetas.forEach( (elemento) => console.log(elemento) );