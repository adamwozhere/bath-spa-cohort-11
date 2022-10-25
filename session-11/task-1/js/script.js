const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationInput = document.getElementById('operation');
const output = document.getElementById('output');

function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) return;

  let result;

  switch (operation.value) {
    case 'add':
      result = num1 + num2;
      break;

    case 'subtract':
      result = num1 - num2;
      break;

    case 'multiply':
      result = num1 * num2;
      break;

    case 'divide':
      result = num1 / num2;
      break;

    default:
      return;
  }

  output.innerText = result;
}

function reset() {
  num1Input.value = '';
  num2Input.value = '';
  operationInput.value = 'add';
  output.innerText = '';
}
