'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.between').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';

document.querySelector('.score').textContent = 100;
document.querySelector('.highscore').textContent = 100;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `⛔ No Number!`;
    displayMessage(`⛔ No Number!`);

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `🎉 Correct Number!`;
    displayMessage(`🎉 Correct Number!`);

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is different
  } else {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? ' 📈Too high!' : '📉Too low!';
      displayMessage(guess > secretNumber ? ' 📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `💥
      // Sorry, you lost the game.`;
      displayMessage(`💥Sorry, you lost the game.`);
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `📈Too high, try again!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `💥
  //     Sorry, you lost the game.`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = `📉Too low, try again!`;
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
