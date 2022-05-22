let fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'fileApple');
console.warn(dirPath);
for(let i = 0 ; i < 5 ; i++){
    fs.writeFileSync(`${dirPath}/apple${i}.txt`,"a simple text file")
    // fs.writeFileSync(dirPath + "/hello" + i + ".txt","a simple text file")
}

fs.readdir(dirPath,(err,files)=>{
    console.log(files)
    files.forEach((item)=>{
        console.log("file name is " + item)
    })
})


