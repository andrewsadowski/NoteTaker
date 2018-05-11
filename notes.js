const p = document.querySelector('p');
const ps = document.querySelectorAll('p');

console.log(p);

ps.forEach(p => {
  console.log(p.textContent);
});

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JS';
document.querySelector('body').appendChild(newParagraph);
