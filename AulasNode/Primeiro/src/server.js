// Criando servidor com metodo HTTP

const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type' : 'text/plain; charset=utf-8'
    })
    res.end("Conectou")
});

servidor.listen(3000, ()=>{
    console.log(`Servidor on: http://localhost:3000`);
})