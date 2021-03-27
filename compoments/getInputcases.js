const get6Number = require('./get6Number');

function getInputcases(num){

    const arrResult = {};
    let count = 0;

    while(count < num){

        const lotto = get6Number()
        let bool = false;

        if(arrResult.length === 0){
            arrResult[0] = lotto;
        }

        else{

            bool = checkSame(arrResult, lotto)
            if(bool === true) continue;

            else arrResult[count] = lotto;

        }

        count++;

    }
    
    return arrResult;

}

function checkSame(total, lotto, bool = false){

    const keys = Object.keys(total);

    for(let i = 0; i < keys.length; i++){
        if(lotto[0] === total[i][0]){

            let count = 0;

            for(let j = 1; j < 2; j++){

                if(lotto[j] === total[i][j]){
                    count++;
                }

            }

            if(count >= 1){
                bool = true;
                break;
            }
        }
    }

    return bool
}

module.exports = getInputcases;