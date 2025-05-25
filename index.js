const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"application/json"});
    res.write(JSON.stringify({name:"shalini" , age:90}));
    res.end();
}).listen(4000); 