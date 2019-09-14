// let Arr = [1, 3, 4, 1, 7, 4, 4, 7, 9, 3, 2, 6, 4];

// function MinMax(arr, el){
//     let Min = arr.indexOf(el);
//     let Max = arr.lastIndexOf(el);

//     console.log('MinIndex = ', Min);
//     console.log('MaxIndex = ', Max);
// }

// MinMax(Arr, 1);





function Party(n, m){
    let arr = Array.from(Array(n), () => new Array(m));
    let arr1 = Array.from(Array(m), () => new Array(n));  


    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            arr[i][j] = parseInt(Math.random()*(n*m));
        }
    }   
    console.log(arr);

}

Party(3, 5);






