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

document.querySelector('#create-note').addEventListener('click', () => {});

document.querySelector('#remove-all').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach(note => {
    note.remove();
  });
});

document.querySelector('#search-text').addEventListener('input', e => {
  console.log(e.target.value);
});
