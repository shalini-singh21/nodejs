const mongo=require('./mongo.js');
const cors = require('cors');
const express = require('express');  
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(cors());


app.post('/register', async (req, res) => {
    let data = await mongo();
    let data1 = await data.insertOne(req.body);
    res.send(data1);
    console.log(data1);

});
// app.get('/insert', async (req, res) => {
//     let data = await mongo();
//     let data1 = await data.find({}).toArray();
//     res.send(data1);
// }); 

app.listen(4000);