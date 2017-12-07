// var obj = {
//
//   name: 'Vattghern'
//
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Vattghern","age":102}';
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {

    title: 'Some title',
    body: 'Some body'

}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var noteObject = JSON.parse(noteString);
console.log('Type:',typeof noteObject);
console.log("Title",noteObject.title);
console.log('Body',noteObject.body);
