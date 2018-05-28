'use strict';

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

//Save notes to local storage
const saveNotes = notes => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

//remove note from localStorage
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
  const noteElement = document.createElement('a');
  const textElement = document.createElement('p');
  const statusElement = document.createElement('p');

  //setup the note title text and write to DOM
  if (note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = 'Unnamed note';
  }
  textElement.classList.add('list-item__title');
  noteElement.appendChild(textElement);

  noteElement.setAttribute('href', `/edit.html#${note.id}`);
  noteElement.classList.add('list-item');

  statusElement.textContent = generateLastEdited(note.updatedAt);
  statusElement.classList.add('list-item__subtitle');
  noteElement.appendChild(statusElement);

  return noteElement;
};

// sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

//render app notes
const renderNotes = (notes, filters) => {
  const notesElement = document.querySelector('#notes');
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  notesElement.innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach(note => {
      const noteElement = generateNoteDOM(note);
      notesElement.appendChild(noteElement);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No notes available';
    emptyMessage.classList.add('empty-message');
    notesElement.appendChild(emptyMessage);
  }
};

//generate last edtited message
const generateLastEdited = timestamp => {
  return `Last edited ${moment(timestamp).fromNow()} ago`;
};
