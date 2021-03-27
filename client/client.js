let inputNum = document.querySelector('#inputNum');
let num = inputNum.value;

function setValue(e){

    if(inputNum.value <= 0){
        console.log("cannot go below 0");
        inputNum.value = num;
    }

    else if(inputNum.value >= 100){
        console.log("cannot go up 100");
        inputNum.value = num;
    }

    else{
        num = inputNum.value;
        console.log("User Input", num);
    }


}

function pluseFun() {

    if(num >= 100){
        console.log("cannot go up 100");
        return;
    }

    else{
        num++;
        inputNum.value = num;
        console.log(num);
    }

}

function minusFun() {
    if(num <= 0){
        console.log("cannot go below 0");
        return;
    }

    else{
        num--;
        inputNum.value = num;
        console.log(num);
    }

}

function getLottoNum(){
    console.log("getLottoNum working", num);

    if(parseInt(num) === 0){

        window.fetch("http://localhost:3000/")
        .then(data => data.json())
        .then((data) => {

            const val = Object.values(data);
            let listId = document.getElementById('lottoNum');
            listId.textContent = '';

            
            
            for(let i = 0; i < val.length; i++){
                console.log(val[i])
                let liElement = document.createElement('li');
                liElement.textContent = String(val[i]);
                listId.append(liElement);
            }
        });
    }

    else {
        val_count = {"num" : parseInt(num)};
        console.log(val_count);


        window.fetch("http://localhost:3000/",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(val_count)

        })
        .then(data => data.json())
        .then((data) => {

            const val = Object.values(data);
            let listId = document.getElementById('lottoNum');
            listId.textContent = '';

            
            
            for(let i = 0; i < val.length; i++){
                console.log(val[i])
                let liElement = document.createElement('li');
                liElement.textContent = String(val[i]);
                listId.append(liElement);
            }
        });
    }
    
}

