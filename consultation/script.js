
function MinMax(n, num){
    let arr = [];
    for (let i = 0; i < n; i++){
        let el = parseInt(Math.random()*99);
        arr.push(el);
    }
    arr.sort((el1, el2) => {
        return el1 - el2
    })

    let Min = arr.indexOf(num);
    let Max = arr.lastIndexOf(num);

    console.log(arr);
    
    console.log(`MinIndex = ${Min}`);
    console.log(`MaxIndex = ${Max}`);

}
MinMax(100, 5);









// function Party(n, m){
//     let arr1 = Array.from(Array(n), () => new Array(m));
//     let arr2 = Array.from(Array(n), () => new Array(m));
//     let stay = 0;
      
//     for (let i = 0; i < n; i++){
//         for (let j = 0; j < m; j++){
//             arr1[i][j] = i*m + j + 1;
//             arr2[i][j] = j*n + i + 1;

//             if (arr1[i][j] === arr2[i][j]){
//                 stay += 1;
//             }
//         }  
//     } 

//  console.log(arr1);
//  console.log(arr2);
//  console.log(`На своїх місцях залишилось ${stay} батьків`);

// }

// Party(3, 5);






