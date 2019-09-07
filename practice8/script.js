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

let Vika = new User('Vika', 'Kushnir', 26, 'female', 'Ukraine', 'Lviv', true);
let Vasia = new User('Vasia', 'Vaskin', 32, 'male', 'Poland', 'Varshav', true);
let Olha = new User('Olha', 'Lol', 23, 'female', 'France', 'Paris', false);
let Peter = new User('Peter', 'Smith', 56, 'male', 'German', 'Dusseldorf', false);
let Huan = new User('Huan', 'Pedro', 34, 'male', 'Portugal', 'Lisabon', true);
let Dima = new User('Dima', 'Kus', 40, 'male', 'Ukraine', 'Kyiv', false);
let Harry = new User('Harry', 'Potter', 11, 'male', 'England', 'London', false);
let Grisha = new User('Grisha', 'Pupkin', 18, 'male', 'Belarus', 'Minsk', true);
let Joan = new User('Joan', 'Kasper', 44, 'male', 'USA', 'Kalifornia', true);
let Aldo = new User('Aldo', 'Farelli', 25, 'male', 'Itali', 'Milan', false);

// FourthUser.toString();

let userArr = [Vika, Vasia, Olha, Peter, Huan, Dima, Harry, Grisha, Joan, Aldo];

function sorter(userArr = [], field, way){
    let arr = userArr.map(function(user){
        return (user[field]);
    })
    if (way === 'up'){
        arr = arr.sort((a, b) => {
            if (b > a) {
                return -1;
            }
            if (a > b){
                return 1;
            }
            return 0;
        })
    }
    if (way === 'down'){
        arr = arr.sort((a, b) => {
            if (b > a) {
                return 1;
            }
            if (a > b){
                return -1;
            }
            return 0;
        })
    }
    console.log(arr);
}

sorter(userArr, 'FirstName', 'up');