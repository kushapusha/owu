let Arr = [1, 3, 4, 1, 7, 4, 4, 7, 9, 3, 2, 6, 4];

function MinMax(arr, el){
    let Min = arr.indexOf(el);
    let Max = arr.lastIndexOf(el);

    console.log('MinIndex = ', Min);
    console.log('MaxIndex = ', Max);
}

MinMax(Arr, 0);