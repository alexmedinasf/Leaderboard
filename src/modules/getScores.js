const getScores = async (scores) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/83hd9739mfd0sm09qf/scores/');
  const json = await response.json();
  scores.innerHTML = '';
  const stortedScores = json.result.sort((a, b) => b.score - a.score);
  stortedScores.forEach((element) => {
    if (json.result.length > 0) {
      scores.innerHTML += `<li>${element.user}: ${element.score}</li>`;
    } else {
      scores.innerHTML = 'No scores yet';
    }
  });
};
export default getScores;