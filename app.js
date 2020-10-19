const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Get Notes";
};

const addNote = (header, body) => {
  const notes = loadNote();
  const duplicateNote = notes.filter(e => e.title === header);

  if (duplicateNote.length === 0) {
    notes.push({
      title: header,
      body: body
    });
    saveNote(notes);
    console.log(chalk.green.inverse("New Note Added"));
  } else {
    console.log(chalk.red.inverse("Duplicate Note!!"));
  }
};

const removeRemove = header => {
  const readNote = loadNote();
  const duplicateNote = readNote.filter(function(e) {
    return e.title !== header;
  });
  if (duplicateNote.length !== 0) {
    saveNote(duplicateNote);
  } else {
    console.log("Not duplicate");
  }
};

const readNote = title => {
  const readNote = loadNote();
  const noteList = readNote.find(note => note.title === title);
  if (!noteList) {
    chalk.red.inverse(console.log("Not Data found"));
  } else {
    chalk.green.inverse(console.log(noteList));
  }
};

const saveNote = function(notes) {
  fs.writeFileSync("file.json", JSON.stringify(notes));
};

const loadNote = function() {
  try {
    const readfile = fs.readFileSync("file.json");
    const json = JSON.parse(readfile.toString());
    return json;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeRemove: removeRemove,
  readNote: readNote
};
