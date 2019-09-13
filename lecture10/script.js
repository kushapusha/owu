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


Awake()
    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setInterval(()=>{
                resolve('Прийняла душ. Яка класна водичка')
            }, 1000)
        })
    })

    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setInterval(()=>{
                resolve('Поїла. Класний сніданок')
            }, 2000)
        })
    })

    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setInterval(()=>{
                resolve('Намалювалась. Тепер це табло можна виводити в люди')
            }, 1000)
        })
    })

    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setInterval(()=>{
                resolve('На роботі. Хочу додому!!!')
            }, 2000)
        })
    })

    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setInterval(()=>{
                resolve('О так, я дома. Привіт, пухнаста дупка:)')
            }, 500)
        })
    })

    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setInterval(()=>{
                resolve('Повечеряла. Умм вкусняшки.')
            }, 1000)
        })
    })


