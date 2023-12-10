const chalk = require("chalk");
const { getNotes, addNote, removeNote, readNote } = require("./notes");
const yargs = require("yargs");

yargs.version("1.1.1");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    console.log(chalk.bgMagenta("Your notes"));
    const notes = getNotes();
    notes.forEach((note) => {
      console.log(note.title);
    });
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const note = readNote(argv.title);
    if (note) {
      console.log(chalk.bgGreenBright(note.title));
      console.log(note.body);
    } else {
      console.log(chalk.bgRed("Note not found!"));
    }
  },
});

yargs.parse();
