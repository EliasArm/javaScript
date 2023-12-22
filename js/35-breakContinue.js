const names = ['Arturo','Andres','Alejandro','Jorge','Roberto','Armando','Antonio','Araceli'];

for (let i = 0; i < names.length; i++){
    // console.log(names[i][0]);
    if ( names[i][0] !== 'A' ){
        console.log('Se detiene el ciclo, se encontro un nombre que no inicia con la letra "A"')
        console.log(`${names[i]} no inicia con la letra "A"`);
        break
    }
    console.log(names[i]);
}
console.log('- - - - - - - - - - - - - - - - - - -')
console.log('')


/** 
 *  Continue
 *  La sentencia continue nos sirve para saltar a la siguiente iteración.
*/
console.log('Lista de personas aceptadas: ');
for (let i = 0; i < names.length; i++ ){
    if( names[i] === 'Jorge' ){
        continue;
    }
    console.log(names[i]);    
}