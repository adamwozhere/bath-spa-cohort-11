/**
 * CALCULATOR
 * Has basic error checking / valdation: cannot enter multiply operators in a row, multiple decimals etc.
 * Has a keyboard handler for using numpad.
 * Calculates using order of precedence ( division/multiplication then addition/subtraction)
 * Probably needs much further refactoring, but has become difficult to refactor further at the moment.
 */

const calculator = document.getElementById('calculator');
const inputDisplay = document.getElementById('input-display');
const sumDisplay = document.getElementById('sum-display');

let inputQueue = ['0'];
let previousAction = 'operand';

// button listener
calculator.addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON'; // button needs to be in caps
  if (!isButton) return;

  // animate button
  animateButtonPress(e.target);

  // the type of action e.g. operator (+, -, /, *)
  const action = e.target.dataset.action;
  // the symbol of the action e.g. '-' (minus)
  const symbol = e.target.innerText;
  if (action !== undefined) {
    handleInput(action, symbol);
    updateDisplay();
  }
});

// keyboard listener
document.addEventListener('keydown', (e) => {
  console.log('key', e.key);
  if (e.key === 'Enter') {
    e.preventDefault(); // stop enter from activating buttons?
    animateButtonPress(document.getElementById('btn-equals'));
    handleInput('calculate');
  } else if (e.key === 'Delete') {
    animateButtonPress(document.getElementById('btn-clear'));
    handleInput('clear');
  } else if (e.key === 'Backspace') {
    animateButtonPress(document.getElementById('btn-backspace'));
    handleInput('backspace');
  } else if (isOperator(e.key)) {
    animateButtonPress(
      document.getElementById(`btn-${getOperatorFromSymbol(e.key)}`)
    );
    handleInput('operator', e.key);
  } else if (isOperand(e.key)) {
    animateButtonPress(document.getElementById(`btn-${e.key}`));
    handleInput('operand', e.key);
  }
  updateDisplay();
});

// remove focusable for buttons as keyboard navigation not needed
calculator.addEventListener('focusin', (e) => {
  if (e.target.nodeName === 'BUTTON') e.target.blur();
});

/**
 * Validates an input and formats it into the inputQueue array.
 * @param {String} action - action type e.g. 'operator'
 * @param {String} symbol - input symbol e.g. '+'
 * @returns void
 */
function handleInput(action, symbol) {
  console.log('handleInput', action, symbol, 'prev action', previousAction);
  if (action === 'clear') {
    previousAction = 'operand';
    inputQueue = ['0'];
    sumDisplay.textContent = '';
  } else if (action === 'calculate') {
    handleCalculate();
  } else if (action === 'backspace') {
    handleBackspace();

    // HANDLE OPERATORS
  } else if (action === 'operator') {
    if (previousAction === 'calculate') {
      sumDisplay.textContent = inputQueue;
    }
    if (inputQueue.length === 1) {
      if (inputQueue[0] === '0' && symbol === '-') {
        inputQueue[0] = '-';
        previousAction = 'operand';
      } else if (inputQueue[0] === '-' && symbol === '+') {
        inputQueue[0] = '0';
        previousAction = 'operand';
      } else if (isNaN(inputQueue[0])) {
        console.log('NaN, resetting');
        inputQueue = ['0'];
        previousAction = 'operand';
        sumDisplay.textContent = '';
      } else {
        inputQueue.push(symbol);
        previousAction = 'operator';
      }
    } else {
      if (previousAction === 'operand') {
        inputQueue.push(symbol);
        previousAction = 'operator';
      } else if (previousAction === 'operator') {
        inputQueue[inputQueue.length - 1] = symbol;
        previousAction = 'operator';
      }
    }

    // HANDLE OPERANDS
  } else if (action === 'operand') {
    if (symbol === '.' && inputQueue[inputQueue.length - 1].includes('.'))
      return;
    if (previousAction === 'calculate') {
      inputQueue = [symbol];
      previousAction = 'operand';
      sumDisplay.textContent = '';
      return;
    }
    if (inputQueue.length === 1) {
      if (inputQueue[0] === '0') {
        inputQueue[0] = symbol;
        previousAction = 'operand';
      } else {
        inputQueue[0] += symbol;
        previousAction = 'operand';
      }
    } else {
      if (previousAction === 'operand') {
        if (symbol === '0' && inputQueue[inputQueue.length - 1] === '0') return;
        inputQueue[inputQueue.length - 1] += symbol;
        previousAction = 'operand';
      } else if (previousAction === 'operator') {
        inputQueue.push(symbol);
        previousAction = 'operand';
      }
    }
  }
  console.log('inputQueue', inputQueue);
}

// calculate validated sum
function handleCalculate() {
  if (
    inputQueue.length < 3 ||
    previousAction !== 'operand' ||
    inputQueue[inputQueue.length - 1] === '.'
  )
    return;

  let sumQueue = inputQueue.join(' ');
  console.log('calculate', inputQueue);

  // calculate inputQueue left-to-right in order of precedence,
  // division OR multiplication,
  // then addition OR subtraction.
  //
  // division OR multiplication
  for (let i = 0; i < inputQueue.length; i++) {
    let calc = 0;
    console.log(i, inputQueue[i]);
    if (inputQueue[i] === '/' || inputQueue[i] === '*') {
      calc = operate(
        getOperatorFromSymbol(inputQueue[i]),
        inputQueue[i - 1],
        inputQueue[i + 1]
      );
      inputQueue.splice(i - 1, 3, calc);
      i -= 1;
      console.log(calc);
    }
  }

  // addition OR subtraction
  for (let i = 0; i < inputQueue.length; i++) {
    let calc = 0;
    if (inputQueue[i] === '+' || inputQueue[i] === '-') {
      calc = operate(
        getOperatorFromSymbol(inputQueue[i]),
        inputQueue[i - 1],
        inputQueue[i + 1]
      );
      inputQueue.splice(i - 1, 3, calc);
      i -= 1;
      console.log(calc);
    }
  }

  // update displays on calculation
  let equals = parseFloat(inputQueue[0]);
  sumDisplay.textContent = sumQueue + ' =';
  inputDisplay.textContent += ' = ' + parseFloat(equals.toFixed(7));
  previousAction = 'calculate';
  input = [parseFloat(equals.toFixed(7)).toString()];

  console.log('input', inputQueue);
}

function updateDisplay() {
  inputDisplay.textContent = inputQueue.join(' ');
}

function handleBackspace() {
  if (previousAction === 'calculate') {
    inputQueue = ['0'];
    previousAction = 'operand';
    sumDisplay.textContent = '';
    return;
  }
  inputQueue[inputQueue.length - 1] = inputQueue[inputQueue.length - 1].slice(
    0,
    -1
  );

  console.log('len', inputQueue.length);
  if (inputQueue[inputQueue.length - 1].length === 0) inputQueue.pop();
  if (inputQueue.length === 0) inputQueue = ['0'];
  if (isOperator(inputQueue[inputQueue.length - 1])) {
    previousAction = 'operator';
  } else {
    previousAction = 'operand';
  }
  console.log('backspace', inputQueue);
}

// operate two numbers together
// prettier-ignore
function operate(operator, num1, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  switch (operator) {
    case 'divide':    return a / b;
    case 'multiply':  return a * b;
    case 'add':       return a + b;
    case 'subtract':  return a - b;
  }
}

/**
 *
 * Helper functions
 */
// check input types
const isOperand = (n) => n === '.' || Number.isInteger(parseFloat(n));
const isOperator = (n) => n === '/' || n === '*' || n === '-' || n === '+';

const getOperatorFromSymbol = (s) => {
  switch (s) {
    case '/':
      return 'divide';
    case '*':
      return 'multiply';
    case '-':
      return 'subtract';
    case '+':
      return 'add';
  }
};

// reset and animate button press
function animateButtonPress(b) {
  console.log(b);
  b.classList.remove('btn-pressed');
  b.classList.add('btn-pressed');
  setTimeout(() => {
    b.classList.remove('btn-pressed');
  }, 100);
}
