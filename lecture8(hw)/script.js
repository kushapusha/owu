class Car {
    constructor(brand, year, price, owner, colour) {
        this.brand = brand;
        this.year = year;
        this.price = price;
        this.owner = owner;
        this.colour = colour;
    }
    info(){
        console.log(this);
    }
}

// let First = new Car ('BMW', 2002, 1500, 'Viktor', 'red');
// let Second = new Car ('Audi', 2008, 1150, 'Lida', 'black');
// let Third = new Car ('Merserdes', 2010, 1000, 'Roman', 'yellow');
// let Fourth = new Car ('Opel', 2017, 1300, 'Taras', 'white');
// let Fifth = new Car ('Toyota', 2000, 1555, 'Oksana', 'blue');
// let Sixth = new Car ('Honda', 2005, 2000, 'Mykola', 'green');
// let Seventh = new Car ('Hundai', 2009, 2500, 'Ira', 'orange');
// let Eighth = new Car ('Lada', 2011, 900, 'Oleh', 'violet');
// let Nineth = new Car ('Reno', 2013, 3500, 'Vika', 'pink');
// let Tenth = new Car ('Subaru', 2007, 2600, 'Marta', 'gold');

// Third.info();

class SuperCar extends Car {
    constructor(brand, year, price, owner, colour, isnew, power) {
        super(brand, year, price, owner, colour);
        this.isnew = isnew;
        this.power = power;
    }
    info(){
        console.log(this);
    }
}

let First = new SuperCar ('BMW', 2002, 1500, 'Viktor', 'red', true, 85);
let Second = new SuperCar ('Audi', 2008, 1150, 'Lida', 'black', false, 100);
let Third = new SuperCar ('Merserdes', 2010, 1000, 'Roman', 'yellow', true, 90);
let Fourth = new SuperCar ('Opel', 2017, 1300, 'Taras', 'white', true, 80);
let Fifth = new SuperCar ('Toyota', 2000, 1555, 'Oksana', 'blue', false, 85);
let Sixth = new SuperCar ('Honda', 2005, 2000, 'Mykola', 'green', true, 95);
let Seventh = new SuperCar ('Hundai', 2009, 2500, 'Ira', 'orange', true, 105);
let Eighth = new SuperCar ('Lada', 2011, 900, 'Oleh', 'violet', false, 101);
let Nineth = new SuperCar ('Reno', 2013, 3500, 'Vika', 'pink', true, 97);
let Tenth = new SuperCar ('Subaru', 2007, 2600, 'Marta', 'gold', false, 98);