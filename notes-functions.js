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

//Generate DOM structure
const generateNoteDOM = note => {
  const noteElement = document.createElement('div');
  const textElement = document.createElement('span');
  const button = document.createElement('button');

  //Setup remove note button
  button.textContent = 'x';
  noteElement.appendChild(button);

  //setup the note title text
  if (note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = 'Unnamed note';
  }
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