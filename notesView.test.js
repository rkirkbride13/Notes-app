/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const View = require('./notesView');
 const Model = require('./notesModel');
 
 describe('Page view', () => {
 
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html');
   });
 
   it('adds a new note', () => {
  
    const model = new Model();
    const view = new View(model);
    const input = document.querySelector('#input-note');
    input.value = 'My new amazing test note';
    const button = document.querySelector('#add-note-button');
    button.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
  });

  it('adds a new note and displays it even when called twice', () => {
  
    const model = new Model();
    const view = new View(model);
    const input1 = document.querySelector('#input-note');
    input1.value = 'My new amazing test note';
    const button = document.querySelector('#add-note-button');
    button.click();
    const input2 = document.querySelector('#input-note');
    input2.value = 'Another note';
    button.click();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('Another note');
  });

  it('clear the list of previous notes before displaying', () => {  
    const model = new Model();
    const view = new View(model);
    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

 });