const notes = getSavedNotes();

const filters = {
  searchText: ''
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteElement = document.createElement('p');

    if (note.title.length > 0) {
      noteElement.textContent = note.title;
    } else {
      noteElement.textContent = 'Unnamed note';
    }

    document.querySelector('#notes').appendChild(noteElement);
  });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', e => {
  notes.push({
    title: '',
    body: ''
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', e => {
  console.log(e.target.value);
});
