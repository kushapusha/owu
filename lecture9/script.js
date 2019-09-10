class Computer{
    constructor(ram, cpu){
        this.ram = ram;
        this.cpu = cpu;
    }
}

class Leptop extends Computer{
    constructor(ram, cpu, weight, inch, cdRom){
        super(ram, cpu);
        this.weight = weight;
        this.inch - inch;
        this.cdRom = cdRom;
    }
}

class Ultrabook extends Leptop{
    constructor(ram, cpu, weight, inch, cdRom){
        super(ram, cpu, weight, inch, cdRom);
    }
}

class SuperComp extends Computer{
    constructor(ram, cpu){
        super(ram, cpu);
    }
}


// let LALA = new Ultrabook(8, 'intell', 3, 13, false);
// let LALALA = new Ultrabook(8, 'intell', 1, 13, false);


// function forUltrabook(nameme){
//     if (nameme.weight > 2){
//         throw new Error ('HEY, it is not Ultrabook!!!')
//     }
//     console.log(nameme);
// }
// forUltrabook(LALA);


let C1 = new SuperComp(16, 'AMD');
let C2 = new SuperComp(32, 'intell');

function forSuperComp(C){
    if(C.ram < 32 && C.cpu !== 'intell'){
        throw new Error ('Sorry, but your computer is not SUPER:((')
    }
    console.log(C);
}

forSuperComp(C2);