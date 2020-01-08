const fs = require('fs')
//const getNotes = require('./notes.js')
const name = require('./notes.js')
const sum = require('./utilis.js')
//fs.writeFileSync('text.txt','\nnode is awesome');
//fs.appendFileSync('text.txt','\nAkashdeep');
//const msg = getNotes();
const add = sum(5,8);
console.log(name);
console.log(add);