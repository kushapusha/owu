// strings = ['Hello', 'World', 'JS'];

// Array.prototype.stringSmall = function () {

//    let minlength = this[0];

//    for (let i = 1; i<this.length; i++) {

//      if (minlength.length > this[i].length) {
//        minlength = this[i];
//      }
//    }
//    console.log(minlength);

// };

// strings.stringSmall();





arr = [12, 5, {name: 'lala', id: 555}, {name: 'dlcd', age: 8}, 6, 'egeg', {age: 78, id: 45}, false, {cat: true, id: 'rrrr'}];

console.log(arr);

Array.prototype.justID = function() {
    for (let i = 0; i < this.length; i++) {

    this[i].id ? console.log(this[i]) : 0;  

    }
}

arr.justID();