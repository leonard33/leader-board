// css files here
import './style.css';

const scores = [
  {
    name: 'Joseph',
    score: 100,
  },
  {
    name: 'paul',
    score: 50,
  },
  {
    name: 'John',
    score: 20,
  },
  {
    name: 'Peter',
    score: 80,
  },
  {
    name: 'Kelvin',
    score: 60,
  },
];

const scorelist = document.querySelector('.score-otput');

scores.forEach((scored) => {
  scorelist.innerHTML += `<ul class="scoreput">
  <li class="names">${scored.name}:&nbsp;${scored.score}</li>
</ul>`;
});
