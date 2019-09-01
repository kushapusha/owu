// let arr = [1, 2, 3, 4, 5]; 
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);


// let arr2 = arr.splice(1, 3);
// console.log(arr2);

// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);


// let arr =  [3, 4, 1, 2, 7];
// let sorted = arr.sort(function(a, b){
//     return a-b;
// })
// console.log(sorted);

// let obj = {js:'test', jq: 'hello', css: 'world'};
// let keys = Object.keys(obj);
// console.log(keys);




let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users);

let users2 = JSON.parse(JSON.stringify(users));
i=0;
while(i < users2.length){
    let randomNumber = parseInt(Math.random()*(9999-1000)+1000);
    users2[i].id = randomNumber;
    i++;
}

console.log(users2);

let usersSort = JSON.parse(JSON.stringify(users2));

usersSort.sort(function(a,b){
    return a.id - b.id;
})

console.log(usersSort);