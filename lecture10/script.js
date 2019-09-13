function Awake(){
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve('Доброго ранку!')
        }, 0)
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

    .then(value => {
        console.log(value);
    })
