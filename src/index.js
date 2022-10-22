import css from "./style.css";
import addLi from './modules/add-li.js';

const leaderboardData = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
  ],
};

leaderboardData.result.forEach((element) => {
  const text = `${element.user}: ${element.score}`;
  addLi(text);
});