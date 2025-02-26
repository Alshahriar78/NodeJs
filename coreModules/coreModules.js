const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs')

const myPath= 'E:/AL_Shahoriar/New folder/NodeJs/coreModules/coreModules.js';

// console.log(path.parse(myPath));
fs.readFile('note.txt',(err,data)=>{
    console.log(data.toString());
})
console.log(os.homedir())
console.log('Hello')


// Events -> event driven 