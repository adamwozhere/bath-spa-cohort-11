/**
 * colour changer
 */
const box = document.getElementById('background-change');

function colorChange() {
  const colors = ['red', 'green', 'orange', 'purple', 'blue', 'yellow'];
  let colorPicker = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = colorPicker;
  box.style.width = '7rem';
  box.style.height = '7rem';
}

colorChange();

const btnColorChange = document.getElementById('btn-color-change');
btnColorChange.addEventListener('click', colorChange);

/**
 * number guessing game
 */

const btnGuess = document.getElementById('btn-guess');
const outputMsg = document.getElementById('output-msg');

btnGuess.addEventListener('click', (e) => {
  const computerGuess = Math.floor(Math.random() * 31);
  const userGuess = document.getElementById('user-guess').value;

  console.log('userGuess', userGuess);
  console.log('computerGuess', computerGuess);

  if (userGuess == computerGuess) {
    outputMsg.textContent = `Congratulations! You guessed the computer's number: ${computerGuess}`;
  } else {
    outputMsg.textContent = `Unlucky. You guessed ${userGuess} but the computers number was ${computerGuess}`;
  }
});

/**
 * FIZZ BANG
 * for every number between 1 and 100 inclusive,
 * log the number to html
 * if the number is divisible by 3, add fizz
 * if the number is divisible by 5, add bang
 * if the number is divisible by 3 and 5, add fizzbang
 * else just log the number;
 */

function fizzBang() {
  for (let i = 1; i <= 100; i++) {
    let suffix = '';
    if (i % 3 === 0) {
      suffix += 'Fizz';
    }
    if (i % 5 === 0) {
      suffix += 'Bang';
    }
    console.log(`${i} ${suffix}`);
  }
}

fizzBang();
