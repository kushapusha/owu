class Character{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}


let Stasy = new Character('Stasy', 20, 35);
let Diana = new Character('Diana', 33, 37);
let Barbara = new Character('Barbara', 55, 39);
let Leila = new Character('Leila', 25, 36);
let Ketie = new Character('Ketie', 15, 33);
let Phibi = new Character('Phibi', 21, 38);
let Rosa = new Character('Rosa', 19, 40);
let Tina = new Character('Tina', 20, 34);
let Samanta = new Character('Samanta', 28, 41);
let Miranda = new Character('Miranda', 22, 42);

let Cinderella = [Stasy, Diana, Barbara, Leila, Ketie, Phibi, Rosa, Tina, Samanta, Miranda];

let Mark = new Character('Mark', 24, 35);
let Ben = new Character('Ben', 30, 41);
let John = new Character('John', 18, 36);
let Den = new Character('Den', 22, 38);
let Kris = new Character('Kris', 25, 40);
let Ron = new Character('Ron', 27, 37);
let Harry = new Character('Harry', 33, 34);
let Leonard = new Character('Leonard', 15, 33);
let Sheldon = new Character('Sheldon', 60, 39);
let Kurt = new Character('Kurt', 19, 42);

let Prince = [Mark, Ben, John, Den, Kris, Ron, Harry, Leonard, Sheldon, Kurt];

Prince.forEach(boy => {
    let girl = Cinderella.find(girl =>{
        return (boy.size === girl.size)
    })
    console.log(girl, boy);
    console.log('__________________');
})
