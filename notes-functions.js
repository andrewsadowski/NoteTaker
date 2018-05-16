console.log(uuidv4());

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const saveNotes = notes => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const removeNote = id => {
  const noteIndex = notes.findIndex(note => {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//Generate DOM structure
const generateNoteDOM = note => {
  const noteElement = document.createElement('div');
  const textElement = document.createElement('a');
  const button = document.createElement('button');

  //Setup remove note button

  button.textContent = 'x';
  noteElement.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  //setup the note title text and write to DOM
  if (note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = 'Unnamed note';
  }
  textElement.setAttribute('href', `/edit.html#${note.id}`);
  noteElement.appendChild(textElement);

  return noteElement;
};

//render app notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteElement = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteElement);
  });
};
