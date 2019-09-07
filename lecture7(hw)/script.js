let arr = [2,4,6,[34,6,2],4,7];
let i=0;

function recursion(){
    if (i < arr.length){
        console.log(arr[i]);
        if (Array.isArray(arr[i])){
            arr.flat();    
            
        } 
        i++;
        recursion();
    }
}

recursion();