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

titleElement.addEventListener('input', e => {});

removeNoteButton.addEventListener('click', e => {});
