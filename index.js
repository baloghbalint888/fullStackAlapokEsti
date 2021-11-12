const http = require('http');
const fs = require('fs');

const port = "5555";

const server = http.createServer((req,res) =>{
    console.log("Új kérés érkezett.")
    console.log(req.url);
    console.log(req.method);

    switch(true){
        case req.url ==="/" && req.method ==="GET":
            fs.readFile('./views/index.html',(err,data)=>{
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url ==="/script.js" && req.method ==="GET":
            fs.readFile('./public/script.js',(err,data)=>{
                res.setHeader('Content-Type', 'text/javascript');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url ==="/favicon.ico" && req.method ==="GET":
            fs.readFile('./views/favicon.ico',(err,data)=>{
                res.setHeader('Content-Type', 'image/x-icon');
                res.writeHead(200);
                res.end(data);
            })
        break;
        default:
                fs.readFile('./views/error.html',(err,data)=>{
                    res.setHeader('Content-Type', 'text/html');
                    res.writeHead(404);
                    res.end(data);
                })
    }
});

server.listen(port);