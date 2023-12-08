console.log('--- Arreglos ---');

const friends = ['Alejando', 'Manuel', 'Cesar'];

const friend = friends[0];

console.log(friend);

const colors = [];

colors[0] = 'white';

colors.push('red');
colors.push('blue');
colors.push('orange');


for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    console.log(color);
}

console.log(colors);
console.log('El arreglo colores tiene: ' + colors.length + ' colores')