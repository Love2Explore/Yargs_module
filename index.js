const note = require("./app.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  // describe: "Adding new note",
  builder: {
    title: {
      describe: "Add Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Add Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    console.log(argv.title);
    console.log(argv.body);
    note.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  builder: {
    header: {
      describe: "Remove",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    note.removeRemove(argv.header);
  }
});

yargs.command({
  command: "read",
  builder: {
    header: {
      describe: "Read",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    note.readNote(argv.header);
  }
});

yargs.parse();
