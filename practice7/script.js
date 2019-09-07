
//Factorial



// function fakt(num, callback){
//     if (num != 1){
//         return (num*callback(num-1, callback));
//     } else {
//         return 1;
//     }
// }



// function fakt(num, callback){
//     return(num != 1)?(num*callback(num-1, callback)):1
// };
// console.log(fakt(5, fakt));


// Fibonachi


// function fibonacci(max) {
//     let result = [1, 2];

//     for (let i = 1; result[i] < max; i++) {
//         result.push(result[i] + result[i - 1]);
//     }

//     console.log(result);

// }

// fibonacci(20);


// function factorial(num){
//     let res = 1;
//     for (i = 1; i <= num; i++){
//         res *= i;
//     }
//     return res;
// }

// console.log(factorial(5));


function fibonacci(max){
    let arr = [1, 2];
    for (i = 1; i < max-1; i++){
        arr.push(arr[i] + arr[i-1])
    }
    console.log(arr);
}

fibonacci(10);