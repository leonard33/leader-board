// css files here
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Oawl0gMZlyz9hcMNVFYR/scores';
const pushdata = async (username, userscore) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score: userscore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

const form = document.querySelector('#form-1');
const myname = document.querySelector('#myname');
const myscore = document.querySelector('#myscore');
const refresh = document.querySelector('#refresh');
const scorelist = document.querySelector('.stripes');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const myname = document.querySelector('#myname').value;
  const myscore = document.querySelector('#myscore').value;
  pushdata(myname, myscore);
  form.reset();
});

const getdata = async () => {
  const scorestream = await fetch(url);
  const scoredata = await scorestream.json();
  scorelist.innerHTML = '';
  // eslint-disable-next-line array-callback-return
  scoredata.result.forEach((key) => {
    scorelist.innerHTML += ` <tr>
      <td>${key.user}:</td>
      <td>${key.score}</td>
      <td><span class="material-icons md-light">local_police</span></td>
    </tr>`;
  });
};
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getdata();
});

document.addEventListener('DOMContentLoaded', getdata);
