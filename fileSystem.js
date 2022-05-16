let fs = require('fs')
fs.writeFileSync('newCreate.txt','hello my first code node')

//if i am importing fs it brings every property within it . so it actually making it heavy .

// so we can import only a single property;

let gs = require('fs').writeFileSync;//so it will only bring the single property

gs('new.txt','hello johnny')

