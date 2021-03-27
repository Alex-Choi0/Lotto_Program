const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const getInputcases = require('./compoments/getInputcases');





const PORT = 3000;

app.use(cors());

app.use((req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(`${fullUrl}`);
    next();
})

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    const test = getInputcases(5);
    console.log("GET", test);
    res.send(JSON.stringify(test));
});

    app.post('/', (req, res)=>{
        console.log(req.body["num"]);
        const num = req.body["num"];
    
        if(num === 0 || num === undefined){
            
            res.status(404).send("Bad request");
            return;
        }
        else{
            const test = getInputcases(num);
    
            res.send(test);
        }
    
    })





app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
