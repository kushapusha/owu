let str = 'hello world';
let j = str.length;
let i = 0;

function DrukarskaMash(str){

    let time = parseInt(Math.random()*1000);

    setTimeout(() => {
        if (i < str.length + 1) {
            console.clear();
            console.log(str.slice(0, i));     
            i++;
            DrukarskaMash(str);
        } else if  (j >= 0) {          
            console.clear();
            console.log(str.slice(0, j));     
            j--;
            DrukarskaMash(str);
        }
    }, time)

}

DrukarskaMash(str);







// setTimeout(function(){
//     for(var i = 1; i < 10; i++){
//         console.log(i) }
// }, 1000);


