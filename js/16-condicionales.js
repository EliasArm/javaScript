const user = {
    age: 19,
    country: 'México',
    ticket: true,
};

if (user.age > 17) {
    console.log('Es mayor de edad. Puede ingresar al concierto')
} else {
    console.log('Es menor de edad. No puede ingresar al concierto')
}

if (user.age > 17 && user.ticket) {
    console.log('Es mayor de edad y tiene ticket. Puede ingresar');
} else {
    console.log('Es menor de edad o no tiene ticket. No puede ingresar')
}

if (user.age > 17) {
    if (user.ticket) {
        console.log('Es mayor de edad y tiene ticket. Adelante');
    } else {
        console.log('Es mayor de edad, pero no tiene ticket. No pasa');
    }
} else {
    console.log('Es menor de edad. No pasa');
}

if (user.age < 18) {
    console.log('Es menor de edad. No puede ingresar')
} else if (!user.ticket) {
    console.log('Es mayor de edad pero no tiene ticket. No puede ingresar')
} else {
    console.log('Puede ingresar')
}