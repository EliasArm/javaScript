console.log('----- Switch -----');

const people = {
    name: 'Armando',
    country: 'Canada'
};

switch (people.country) {
    case 'México':
        console.log(`${people.name} es mexicano`);
        break;
    case 'Colombia':
        console.log(`${people.name} es colombiano`);
        break;
    case 'España':
        console.log(`${people.name} es español`);
        break;
    default:
        console.log(`${people.name} es de otro país`);
        break;
}


