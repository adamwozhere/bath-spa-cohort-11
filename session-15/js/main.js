/**
 * TODO:
 * convert input queue back to being array of each character then combine into operands / operators on calculation in separate step
 * allow negating a minus symbol when pressing plus, and check all the symbol changing rules.
 * display output sting with a space in between each character.
 * handle divide by zero error.
 * show answer on a sperate line.
 * hover styles, backspace button.
 */

const calculator = document.getElementById('calculator');
const sumDisplay = document.getElementById('sum-display');

let input = ['0'];
let hasDecimal = false;
let calculated = false;
let leadingNegative = false;

const buttonFunctions = {
  operator: handleOperator,
  operand: handleOperand,
  decimal: handleDecimal,
  calculate,
  clear,
};

// button listener
calculator.addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON'; // button needs to be in caps
  if (!isButton) return;

  const fn = e.target.dataset.function;
  if (fn !== undefined) {
    buttonFunctions[fn](e.target.textContent);
  }
});

// keyboard listener
document.addEventListener('keyup', (e) => {
  console.log('key', e.key);
  switch (e.key) {
    case '*':
    case '/':
    case '-':
    case '+':
      handleOperator(e.key);
      break;

    case '.':
      handleDecimal();
      break;

    case 'Delete':
      clear();
      break;

    case 'Enter':
      calculate();
      break;

    case 'Backspace':
      backspace();
      break;

    default:
      if (Number.isInteger(parseFloat(e.key))) {
        handleOperand(e.key);
      }
  }
});

// input handlers
function handleOperator(e) {
  console.log('operator', e);
  // sum.push(input.join(''));
  if (isOperator(lastInput())) {
    console.log('last input is operator', lastInput());
    input[input.length - 1] = e;
  } else {
    if (lastInput() === '0' && e === '-') {
      input = ['-'];
      leadingNegative = true;
    } else {
      input.push(e);
    }
  }
  hasDecimal = false;
  console.log('input', input);
  updateDisplay(e);
  calculated = false;
}

function handleOperand(e) {
  console.log('number', e);
  if (calculated === true) {
    input = [e];
    updateDisplay(e);
    calculated = false;
    return;
  }

  if (isOperator(lastInput())) {
    if (leadingNegative) {
      input[input.length - 1] += e;
      leadingNegative = false;
    } else {
      input.push(e);
    }
  } else {
    lastInput() === '0'
      ? (input[input.length - 1] = e)
      : (input[input.length - 1] += e);
  }
  console.log('operand', input);
  updateDisplay(e);
  calculated = false;
}

function clear(e) {
  console.log('clear');
  input = ['0'];
  hasDecimal = false;
  updateDisplay(e);
  calculated = false;
}

function backspace() {
  input.pop();
  if (input.length === 0) {
    input = ['0'];
  }
  updateDisplay();
  console.log(input);
  calculated = false;
}

function handleDecimal() {
  if (hasDecimal) return;

  if (isOperator(lastInput())) {
    input.push('.');
    hasDecimal = true;
  } else if (input[input.length - 1] === '0') {
    input[input.length - 1] = '.';
  } else {
    input[input.length - 1] += '.';
    hasDecimal = true;
  }
  console.log('decimal', input);
  updateDisplay();
  calculated = false;
}

// calculate validated sum
function calculate() {
  if (isOperator(lastInput()) || calculated) return;
  console.log('calculate');

  for (let i = 0; i <= input.length; i++) {
    let sum = 0;
    console.log(i, input[i]);
    if (input[i] === '/') {
      sum = operations['divide'](
        parseFloat(input[i - 1]),
        parseFloat(input[i + 1])
      );
      input.splice(i - 1, 3, sum);
      i -= 1;
      console.log(sum);
    } else if (input[i] === '*') {
      sum = operations['multiply'](
        parseFloat(input[i - 1]),
        parseFloat(input[i + 1])
      );
      input.splice(i - 1, 3, sum);
      i -= 1;
      console.log(sum);
    }
  }

  for (let i = 0; i <= input.length; i++) {
    let sum = 0;
    if (input[i] === '+') {
      sum = operations['add'](
        parseFloat(input[i - 1]),
        parseFloat(input[i + 1])
      );
      input.splice(i - 1, 3, sum);
      i -= 1;
      console.log(sum);
    } else if (input[i] === '-') {
      sum = operations['subtract'](
        parseFloat(input[i - 1]),
        parseFloat(input[i + 1])
      );
      input.splice(i - 1, 3, sum);
      i -= 1;
      console.log(sum);
    }
  }

  // let ops = Object.keys(operations);
  // ops.forEach((fn) => {
  //   console.log('try operate', fn);
  //   operate(fn, input);
  // });

  let sum = parseFloat(input[0]);
  sumDisplay.textContent += '=' + parseFloat(sum.toFixed(7));
  calculated = true;
  input = [parseFloat(sum.toFixed(7))];

  console.log('input', input);
}

function updateDisplay(i) {
  sumDisplay.textContent = input.join('');
}

/**
 * object containing operation functions
 */
const operations = {
  divide: (a, b) => parseFloat(a / b),
  multiply: (a, b) => parseFloat(a * b),
  add: (a, b) => parseFloat(a + b),
  subtract: (a, b) => parseFloat(a - b),
};

// operate in sequence BODMAS
// let ops = Object.keys(operations);
// ops.forEach((fn) => {
//   operate(fn, testArray);
// });

// need to change order of operations as it should be division OR multiplication left to right
// then addition OR subtraction left to right!

// let total = parseFloat(testArray[0].toFixed(7));
// console.log(total);

const lastInput = () => input[input.length - 1];

const isOperator = (input) => {
  switch (input) {
    case '+':
    case '-':
    case '/':
    case '*':
      return true;

    default:
      return false;
  }
};

/**
 * Calculate an input array with an operator function e.g. 'multiply'
 * @param {string} operator - string matching an operation function name
 * @param {Array} array - array of validated input values
 */
function operate(operator, array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === getSymbolFromOperator(operator)) {
      console.log('operating', array[i - 1], operator, array[i + 1]);
      let sum = operations[operator](
        parseFloat(array[i - 1]),
        parseFloat(array[i + 1])
      );
      array.splice(i - 1, 3, sum);
      i -= 1;
      console.log(sum);
    }
  }
}

const getSymbolFromOperator = (o) => {
  switch (o) {
    case 'add':
      return '+';

    case 'subtract':
      return '-';

    case 'divide':
      return '/';

    case 'multiply':
      return '*';
  }
};
