
function get6Number(){

    const arr = [];

    for(let i = 0; i < 6; i++){

        const num = Math.floor(Math.random()*44)+1;

        if(arr.indexOf(num) >= 0){
            i--;
            continue;
        }

        arr.push(num);

    }

    return arr.sort((a,b) => a-b);
}
    

module.exports =  get6Number ;

