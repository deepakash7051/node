const fs = require('fs')
//const getNotes = require('./notes.js')
const name = require('./notes.js')
//fs.writeFileSync('text.txt','\nnode is awesome');
fs.appendFileSync('text.txt','\nAkashdeep');
//const msg = getNotes();
console.log(name);