import addScore from './modules/addScores.js';
import getScores from './modules/getScores.js';
import './style.css';

const scoresList = document.querySelector('#leaderboard');
const submitButton = document.querySelector('#submit-score');
const refreshButton = document.querySelector('#refresh');

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  getScores(scoresList);
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const user = document.querySelector('.user').value;
  const score = document.querySelector('.score').value;
  addScore(scoresList, user, score);
});