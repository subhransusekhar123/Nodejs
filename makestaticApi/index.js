const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'})
    res.write(JSON.stringify({name:'gudu',email:'subhransusekharsahu29@gmail.com'}))
    res.end()
}).listen(5000)