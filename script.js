'use strict';
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  document.querySelector('.guess').value = '';
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = 'Correct! Your won.';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
