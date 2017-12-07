//console.log("Starting app.js");

const fs = require('fs'); //const = constant. require is import equivalent of java
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
    describe: 'Content of note',
    demand: true,
    alias: 'b'
  };

const argv = yargs
            .command('add','Add a new note', {
              title : titleOptions,
              body: bodyOptions
            })
            .command('list', 'List all notes')
            .command('read','Read a note', {
              title: titleOptions
            })
            .command('remove','Remove a note',{
              title: titleOptions
            })
            .help()
            .argv;
var command = argv._[0];

// console.log('Command: ',command);
// console.log('Process', process.argv);
// console.log('Yargs',argv);

if (command === 'add'){

  var noteCheck = notes.addNote(argv.title,argv.body);

  if (noteCheck === undefined){
    console.log("A note with same title already exists.");
  }

  else{
      notes.logNote(noteCheck);
    }

}

else if (command === 'list'){

  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
}

else if(command === 'read'){

  var reading = notes.readNote(argv.title);
  if(reading){
    console.log("Note found");
    notes.logNote(reading);
  }
  else{
    console.log("Note not found");
  }
}

else if(command === 'remove'){

  var remove = notes.removeNote(argv.title);
  if(remove){
    console.log("Note removed successfully.");
    console.log("---");
    console.log("Title:",remove);
  }
  else{
    console.log("Note not found.");
  }
}

else {
  console.log('Command not found');
}
