const operacion1 = (tipo, num1, num2) => {
    let resultado;
    if (tipo === 'suma'){
        resultado = (`Suma = ${num1+num2}`);
    }else if( tipo === 'resta'){
        resultado = (`Resta = ${num1-num2}`);
    }

    return resultado;
}

let resultado1 = operacion1('suma',15,2);

console.log(resultado1);


const operacion2 = (tipo, num1, num2) => {
    if (tipo === 'suma'){
        return (num1 + num2);
    }
    if (tipo === 'resta'){
        return (num1 - num2);
    }
}

let resultado2 = operacion2('suma', 1,1);

console.log(resultado2);