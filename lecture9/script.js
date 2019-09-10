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
