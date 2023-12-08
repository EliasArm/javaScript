const person = {
    name: 'Armando',
    age: 35,
    email: 'armand@mail.com',
    suscripciones: {
        web: true,
        mail: true
    },
    colors: ['red', 'blue', 'white'],
    saludo: function (message) {
        alert(message);
    }
}

person.saludo('Hola ' + person.name);

console.log(person['name']);

const susbs = 'suscripciones';

console.log(person[susbs]);

person.country = 'México';

console.log(person.country);

console.log(person);