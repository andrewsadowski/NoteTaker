const noteID = location.hash.substring(1);
const notes = getSavedNotes();

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeNoteButton = document.querySelector('#remove-note');

const note = notes.find(note => {
  return note.id === noteID;
});

if (note === undefined) {
  location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', e => {
  note.title = e.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener('input', e => {
  note.body = e.target.value;
  saveNotes(notes);
});

removeNoteButton.addEventListener('click', e => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});
