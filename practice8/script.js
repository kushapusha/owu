class User {
    constructor(FirstName, LastName, Age, Sex, Country, City, IsCat){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Sex = Sex;
        this.Country = Country;
        this.City = City;
        this.IsCat = IsCat;
    }
    toString(){
        console.log(this);
    }
}

let FirstUser = new User('Vika', 'Kushnir', 26, 'female', 'Ukraine', 'Lviv', true);
let SecondUser = new User('Vasia', 'Vaskin', 32, 'male', 'Poland', 'Varshav', true);
let ThirdUser = new User('Olha', 'Lol', 23, 'female', 'France', 'Paris', false);
let FourthUser = new User('Peter', 'Smith', 56, 'male', 'German', 'Dusseldorf', false);
let FifthUser = new User('Huan', 'Pedro', 34, 'male', 'Portugal', 'Lisabon', true);
let SixthUser = new User('Dima', 'Kus', 40, 'male', 'Ukraine', 'Kyiv', false);
let SeventhUser = new User('Harry', 'Potter', 11, 'male', 'England', 'London', false);
let EighthUser = new User('Grisha', 'Pupkin', 18, 'male', 'Belarus', 'Minsk', true);
let NinethUser = new User('', 'Kushnir', 26, 'female', 'Ukraine', 'Lviv', true);
let TenthUser = new User('Vika', 'Kushnir', 26, 'female', 'Ukraine', 'Lviv', true);