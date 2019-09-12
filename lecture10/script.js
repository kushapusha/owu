function Awake(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Доброго ранку!')
        }, 0)
    }
)}

function Shower(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Яка класна водичка')
        }, 1000)
    }
)}

function Breakfast(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Класний сніданок')
        }, 2000)
    }
)}

function MakeUp(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Тепер це табло можна виводити в люди')
        }, 1000)
    }
)}

function Work(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Хочу додому!!!')
        }, 2000)
    }
)}

function Home(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Привіт, пухнаста дупка:)')
        }, 500)
    }
)}

function Dinner(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Вкусняшки!')
        }, 1000)
    }
)}







// async function Day() {
//     console.log(await Awake());
//     console.log(await Shower());
//     console.log(await Breakfast());
//     console.log(await MakeUp());
//     console.log(await Work());
//     console.log(await Home());
//     console.log(await Dinner());
// }

// Day();