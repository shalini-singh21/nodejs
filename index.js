//creating server
// const http = require('http');
// http.createServer((Request, Response) => {
//     Response.writeHead(200, { "content-type": 'application\json' }); //to define status code 
//     Response.write(JSON.stringify({ name: 'shalini singh', email: "shalu.1304@gmail.com" }));
//     Response.end();//signals the end of the response 
// }).listen(4000); //used to start http server 

// Handle Asynchronous Data
console.log("statement 1");
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("statement 2")
        resolve("200")
    }, [4000])
})
promise.then((data) => {
    console.log("promise resolve")
}).catch((data) => {
    console.log("promise reject")
})
console.log("statement 3")

//creating pages like home page and about page and 
// how to render html and json data
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(" <h1>hello shalini </h1>")
});
app.get('/about', (req, res) => {
    res.send(`
         <input type="text" placeholder="user name" />`)
});

app.get('/data', (req, res) => {
    res.send({
        name: "shalini", email: "shalu@1331"
    })
})
app.listen(5000);



