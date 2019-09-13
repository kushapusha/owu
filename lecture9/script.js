class Computer{
    constructor(name, ram, cpu){
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
    }

    OnOff(button){

        if (button === 'on'){
        console.log(`Your ${this.name} is on`)}

        if (button === 'off'){
        console.error(`Your ${this.name} is off`)}
    }

    forGames(gameRam, gameCpu){
        if (this.ram < gameRam || this.cpu !== gameCpu) {
            throw new Error (`Sorry, but your ${this.name} cant support this game`)
        }
        console.log('Lets play')
    }

}

class Leptop extends Computer{
    constructor(name, ram, cpu, weight, inch, cdRom){
        super(name, ram, cpu);
        this.weight = weight;
        this.inch - inch;
        this.cdRom = cdRom;
    }

    goToUniversity(){
        console.error(`Oh nooooo. I dont want to get ${this.name} to University`)
    }

}

class Ultrabook extends Leptop{
    constructor(name, ram, cpu, weight, inch, cdRom){
        super(name, ram, cpu, weight, inch, cdRom);
    }

    goToUniversity(){
        console.log(`Cool. ${this.name} is greate idea.`)
    }

}

class SuperComp extends Computer{
    constructor(name, ram, cpu){
        super(name, ram, cpu);
    }

    goToUniversity(){
        throw new Error(`No! You cant bring ${this.name} to University!`)
    }

}


let Ultrabook1 = new Ultrabook('Ultrabook', 8, 'intell', 3, 13, false);
let Ultrabook2 = new Ultrabook('Ultrabook', 8, 'intell', 1, 13, false);
let Leptop1 = new Leptop('Leptop', 16, 'intell', 4, 15, true);
let Leptop2 = new Leptop('Leptop', 8, 'AMD', 3, 14, false);
let SuperComp1 = new SuperComp('SuperComp', 16, 'AMD');
let SuperComp2 = new SuperComp('SuperComp', 32, 'intell');


SuperComp1.forGames(20, 'intell');



function forUltrabook(whichUltra){
    if (whichUltra.weight > 2){
        throw new Error ('HEY, it is not Ultrabook!!!')
    }
    console.log(whichUltra);
}
forUltrabook(Ultrabook1);


function forSuperComp(whichSC){
    if(whichSC.ram < 32 && whichSC.cpu !== 'intell'){
        throw new Error ('Sorry, but your computer is not SUPER:((')
    }
    console.log(whichSC);
}

forSuperComp(SuperComp1);


SuperComp1.OnOff('on');
Ultrabook1.OnOff('off');

Ultrabook1.goToUniversity();

