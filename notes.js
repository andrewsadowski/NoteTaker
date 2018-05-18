let notes = getSavedNotes();

const filters = {
  searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', e => {
  const id = uuidv4();
  notes.push({
    id,
    title: '',
    body: ''
  });
  saveNotes(notes);
  renderNotes(notes, filters);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', e => {
  console.log(e.target.value);
});

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

const date1 = new Date('January 21 2001 6:26:01');
const date1Timestamp = date1.getTime();
const date2 = new Date('May 24 1984 5:22:01');
const date2Timestamp = date2.getTime();

const earlierTime = (date1, date2) => {
  if (date1 > date2) {
    console.log(date1.toString());
  } else {
    console.log(date2.toString());
  }
};

earlierTime(date1Timestamp, date2Timestamp);
