const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return loadNotes();
};

const readNote = (title) => {
  const notes = loadNotes();

  const noteToRead = notes.find((note) => {
    return note.title === title;
  });

  return noteToRead;
};

const addNote = (title, body) => {
  const notes = loadNotes();

  debugger;

  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("Note successfully added!"));
  } else {
    console.log(chalk.bgRed("Note with the same title already exists!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesAfterRemoval = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length !== notesAfterRemoval.length) {
    console.log(chalk.bgBlue("Note(s) removed successfully!"));
  } else {
    console.log(chalk.bgRedBright("Note(s) with the input title not found"));
    return;
  }
  saveNotes(notesAfterRemoval);
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const readBuffer = fs.readFileSync("notes.json");
    const data = readBuffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote, getNotes, readNote };
