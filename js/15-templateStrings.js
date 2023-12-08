const person = {
    name: 'Elías',
    age: 35,
    country: 'México',
    toString: function () {
        console.log(this.name + ' es de ' + this.country + ' y tiene ' + this.age + ' años');
        console.log(`${this.name} es de ${this.country} y tiene ${this.age} años`);
    }
}

person.toString();