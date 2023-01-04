// notesModel.test.js

const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty list initially', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('adds a notes and prints those added', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('resets the notes when calling reset and prints nothing', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset()
    expect(model.getNotes()).toEqual([]);
  })
})