class Cinderella{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

class Prince{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let Stasy = new Cinderella('Stasy', 20, 35);
let Diana = new Cinderella('Diana', 33, 37);
let Barbara = new Cinderella('Barbara', 55, 39);
let Leila = new Cinderella('Leila', 25, 36);
let Ketie = new Cinderella('Ketie', 15, 33);
let Phibi = new Cinderella('Phibi', 21, 38);
let Rosa = new Cinderella('Rosa', 19, 40);
let Tina = new Cinderella('Tina', 20, 39);
let Samanta = new Cinderella('Samanta', 28, 38);
let Miranda = new Cinderella('Miranda', 22, 36);

let FindCinderella = [Stasy, Diana, Barbara, Leila, Ketie, Phibi, Rosa, Tina, Samanta, Miranda];

let Mark = new Prince('Mark', 24, 35);

function SuperGirl (who){
    if (who.size === Mark.size){
        console.log('WOOHOO! She is mine Cinderella!')
    } else {console.log('No, you are not mine')};
}

SuperGirl(Stasy);