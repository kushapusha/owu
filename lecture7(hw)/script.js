let arr = [2,4,{name: 'Ginger', age: 19, cat: true},6,[34,6,2],4,7];


function OpenArray(someArray){
    if (!Array.isArray(someArray)) {
        return;
    }

    someArray.forEach(value => {

        if (Array.isArray(value)){
            OpenArray(value);
            return;
        }

        if (typeof value === 'object' && value !== null){
            OpenArray(Object.values(value));
            return;
        }

        console.log(value);

    })
}

OpenArray(arr);