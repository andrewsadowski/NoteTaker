const notes = [
  {
    title: 'My next Trip',
    body: 'something or other'
  },
  {
    title: 'Habits to work on',
    body: 'Find habits, work on them'
  },
  {
    title: 'Note 3',
    body: 'Design World'
  }
];

const filters = {
  searchText: ''
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredNotes.forEach(note => {
    const p = document.createElement('p');
    p.textContent = note.title;
    document.querySelector('body').appendChild(p);
  });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', e => {
  e.target.textContent = 'The button was clicked';
});

document.querySelector('#remove-all').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach(note => {
    note.remove();
  });
});

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
