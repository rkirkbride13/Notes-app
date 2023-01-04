const NotesModel = require('./notesModel');
const model = new NotesModel();
const NotesView = require('./notesView');
const view = new NotesView(model);
view.displayNotes();
console.log(model.getNotes())