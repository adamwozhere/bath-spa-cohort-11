// get Fahrenheit from Celsius
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

// or with a function expression.
// const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;

console.log(celsiusToFahrenheit(65));

// populate array of 15 random numbers between 1 and 200
let arr = [];
for (let i = 0; i < 15; i++) {
  let n = Math.floor(Math.random() * (200 - 1) + 1);
  arr.push(n);
}
console.log(arr);

function printCostMultiple(value, index) {
  let output = `item ${index}:
  `;
  for (let i = 1; i <= 10; i++) {
    output += `cost for ${i} item(s): ${value * i},
  `;
  }
  console.log(output);
}

// print multiples for each item in array
arr.map((value, index) => {
  printCostMultiple(value, index);
});

/**
 * PROBLEM 2
 * we have a special offer: the lowest cost item is free,
 * create a function that will take an array of numbers and return the smallest in the array
 */

function smallestNumber(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted.shift();
}

console.log('cheapest item is free! You save: ' + smallestNumber(arr));

/**
 * PROBLEM 3
 * a customer wants to know how much one of every item will cost them
 * create a function that will add all of them up to give a grand total
 */

function addAllItems(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log('total cost of items: ' + addAllItems(arr));

/**
 * PROBLEM 4
 * We have two very picky customers, one only likes odd prices,
 * the other only likes even prices.
 *
 * Create a function that returns a list of all odd and a list of all even numbers.
 */

function printOddEvenItems(arr) {
  let odds = [];
  let evens = [];
  arr.forEach((i) => (i % 2 === 0 ? evens.push(i) : odds.push(i)));

  console.log('odd numbers:', odds);
  console.log('even numbers:', evens);
}

printOddEvenItems(arr);
