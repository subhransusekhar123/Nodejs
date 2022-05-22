// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname,"crud");
// const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,"this is a simple file")

// fs.readFile(filePath,"utf-8",(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

a = 10;
b = 0;

console.log('hii')


let waitingData =new Promise((res,rej)=>{
    setTimeout(()=>{
        res(30)
        console.log('hello')
        b = 30
    },2000)

}).then((res)=> {
    b = res
    console.log(a + res);
})
// console.log('hola', a + b)// to solve these we need promise or callback