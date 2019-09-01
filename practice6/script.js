function userCard(number){
    let options = {balance: 100, transactionLimit: 100, historyLogs:[], key: number};
    return {
        getCardOptions: () => {
            console.log(options);
        },
        putCredits: (put) => {
            options.balance += put;
            putInHistory('Received credits', put);
            console.log(options);
        },
        takeCredits: (take) => {
            if (options.balance < take){
                console.error('Недостатньо коштів на рахунку')
            };

            if (options.transactionLimit < take){
                console.error('Ліміт перевищено')
            };

            options.balance -= take;

            putInHistory('Withdrawal of credits', take);
            console.log(options);
        },
            
        setTransactionLimit: (limit) => {
            options.transactionLimit = limit;
            putInHistory('Transaction limit change', limit);
            console.log(options);
        },
        transferCredits: (credit, card) => {
            if (options.balance < credit){
                console.error('Недостатньо коштів на рахунку')
            };

            if (options.transactionLimit < credit){
                console.error('Ліміт перевищено')
            };

            let pdv = credit + credit*0.005;
            options.balance -= pdv;
            card.putCredits(credit);
            console.log(options);
        }
    }

    function putInHistory(type, credits) {
        options.historyLogs.push(
            {
                operationType: type,
                credits,
                operationTime: new Date().toISOString(),
            }
        )
    }

};

const card1 = userCard(1);
const card2 = userCard(2);
const card3 = userCard(3);

// card3.putCredits(150);
// card3.takeCredits(110);
// card3.setTransactionLimit(3000);

card3.getCardOptions();
card1.getCardOptions();

card3.transferCredits(20, card1);
card3.transferCredits(30, card2);

card2.transferCredits(50, card1);

