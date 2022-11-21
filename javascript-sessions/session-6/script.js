console.log('hello');

/**
 * Create a form with a couple of inputs
Add a button
When nothing is typed in button should be disabled 
When something is typed in button should be  enabled  
When you press the button a success message should appear that  lasts for  5 secs
 */

const txt = document.getElementById('text-input');
const btn = document.getElementById('btn-submit');
const msg = document.getElementById('message');

btn.setAttribute('disabled', true);

txt.addEventListener('input', () => {
  console.log('changed');
  btn.disabled = txt.value === '' ? true : false;
});

btn.addEventListener('click', (e) => {
  e.preventDefault(); // stop page from reloading and messing it up

  txt.value = '';
  btn.diabled = true;
  msg.innerText = 'Success!';
  // remove msg after 5 sec
  setTimeout(() => {
    msg.innerText = '';
  }, 5000);
});

/** flip a coin */
const flipInput = document.getElementById('coin-flip');
const btnFlip = document.getElementById('btn-flip');
const flipOutput = document.getElementById('flip-output');

function flipCoin(num) {
  flipOutput.innerText = '';
  for (let i = 0; i < num; i++) {
    let coin = Math.floor(Math.random() * 2);
    if (coin === 0) {
      console.log('HEADS');
      flipOutput.innerText += `
      HEADS`;
    } else {
      console.log('TAILS');
      flipOutput.innerText += `
      TAILS`;
    }
  }
}

btnFlip.addEventListener('click', (e) => {
  e.preventDefault();
  flipCoin(flipInput.value);
});
