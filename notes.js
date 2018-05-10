const p = document.querySelector('p');
const ps = document.querySelectorAll('p');

console.log(p);

ps.forEach(p => {
  console.log(p.textContent);
});
