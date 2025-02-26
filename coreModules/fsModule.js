let fs = require('node:fs');
let writeData= fs.writeFileSync('note.txt',"Don't worry. you are bacame Updated version.Everthing will be ok In sha Allah.",'utf8');
let updateWrite = fs.appendFileSync('note.txt','Allah is Enough for you. Be Patient');
let data = fs.readFileSync('note.txt','utf8');

console.log();