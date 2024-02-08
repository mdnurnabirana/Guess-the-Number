'use strict';

let number = Math.trunc(Math.random() * 20) + 1;


let score = 20;


document.querySelector('.check').addEventListener('click', function () {
  // Get the player's guess
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = '';

 
  if (guess === number) {
    document.querySelector('.message').textContent = 'Correct! You won.';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').textContent = number;
    document.querySelector('.score').textContent = score; 
  } else {
    
    if (score > 1) {
      document.querySelector('.message').textContent = guess > number ? 'Number is too high' : 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
 
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
