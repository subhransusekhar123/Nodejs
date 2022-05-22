const http = require('http')//this is a core module.it handles req/res in nodeJs.

http.createServer((req,res)=>{
    res.write('<h1>hello this is gudu</h1>');
    res.end();
}).listen(4500)


