const http = require('http');
http.createServer((Request, Response) => {
    Response.writeHead(200, { "content-type": 'application\json' }); //to define status code 
    Response.write(JSON.stringify({ name: 'shalini singh', email: "shalu.1304@gmail.com" }));
    Response.end();//signals the end of the response 
}).listen(4000); //used to start http server 