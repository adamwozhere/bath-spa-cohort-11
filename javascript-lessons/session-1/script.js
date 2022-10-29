console.log('hi');

/*

Variables

let ( this variable can have it's value changed )
const (this variable with have a constant value which stays the same )


comparison operators

= ( change the value to this )
== ( is the value equal to )
=== ( is the value equal to and type )




ARRAYS

Arrays always have square brackets [1, 2, 3];
indexes always start at 0 (for first item);
length always starts at 1 (for first item);

Array methods:
such as 

pop
push
shift
unshift
length

includes


*/

/*
    good practice to always use let with an array that is to be changed,
    even though const does actually work. 
*/

let myArray = [
  'apples',
  'pears',
  'oranges',
  'cherries',
  'blueberries',
  'raspberries',
  'strawberries',
  'bananas',
  'mangoes',
  'grapes',
];

//console.log('my array is ', myArray);

/**
 *  lets check the index of a few items in your array
 */

let myFoodIndexOne = myArray.indexOf('blueberries');
console.log(myFoodIndexOne);

// indexOf always returns a number index position starting at 0;

// ( item to find, from index number )
let myFoodIndex = myArray.indexOf('oranges', 3);
console.log(myFoodIndex);

// Someone got peckish

let IAte = myArray.pop();
// a variable that is assigned to a pop method will return the value that you removed with .pop();
// pop() mutates the original array
console.log(IAte, myArray);

// Someone went to the shop and replaced the item

/**
 *
 *
 */

// when using push the item gets put on the end of the array and retunrs the length
let iBought = myArray.push('crisps');

console.log(iBought, myArray);
console.log(myArray.length);

// includes() will give a true or false value;

/**
 * methods to find items in arrays
 */

// .includes();

let findItem = myArray.includes('apples');
let findNonItem = myArray.includes('veg');

console.log('found item', findItem);
console.log('not in my array', findNonItem);

// .indexOf();

let findIndexTrue = myArray.indexOf('apples');
let nonIndexFalse = myArray.indexOf('veg');

console.log('found item', findIndexTrue);
console.log('not in my array', nonIndexFalse);

// someone ate the first thing on your list
let IateAgain = myArray.shift();
console.log(IateAgain, myArray, 'I ate again');

// replace that first item with choclate
let iAte = myArray.unshift('chocolate');
console.log(iAte, myArray, 'I put back');

/**
 * We are fed up with eating the food in the same order
 * Two ways to change the array order (alpha numeric)
 *
 * sort()
 * reverse()
 *
 * changes the alphabetical order of the foods array
 */

let mySort = myArray.sort();
console.log(mySort, 'mySort');

let myReverse = myArray.reverse();
console.log(myReverse, 'myReverse');

// FUNCTIONS

// basic function

function myFunction(a, b) {
  //let a = 5;
  //let b = 10;
  return a + b;
}

//console.log(myFunction());

let sum = myFunction('hi', 'all');
console.log(sum);

//session 2 will be loops, for loops, functions
// friday 5 - 7;

/**
 * SESSION 2, for loops, if else statements, functions
 */

// if ( statement is true ) { do this }

if (myArray.includes('chocolate')) {
  console.log('I have choc!');
}

// if, else is an either or,
// if ( condition is met ) { do this } else { do this instead };

if (myArray.includes('veg')) {
  console.log('yuck, I found veg');
} else {
  console.log('happy; found no veg!');
}

if (myArray.includes('chocolate')) {
  console.log('happy, I found the choc');
} else {
  console.log('sad; no choc :(');
}

// in a shopping list example
if (myArray.includes('chocolate')) {
  //alert('you have already got chocolate!');
} else {
  //alert('add this item to my array');
}

// if, else if, else if...
// can chain multiple else if's
if (myArray.includes('veg')) {
  console.log('I have veg');
} else if (myArray.includes('pears')) {
  console.log('I have pears');
}

// can chain multiple else if's with a final else
// if () {} else if () {} else if () {} else {}

/**
 * LOOPS
 */

/**
 * for ( index; condition; after loop ) {}
 * for (let i = 0; i < myArray.length; i++) {}
 */

// if indexOf() returns -1 then that means the item is not found
function loop() {
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i], i);
    if (myArray[i].indexOf('chocolate') > 0) {
      console.log('I found chocolate!');
    } else if (myArray[i].indexOf('chocolate') < 0) {
      console.log('I found no chocolate :(');
    }
  }
}
// for testing, we are putting the loop in a function in case live server keeps running the loop?
loop();

function numberSort() {
  let number = Math.floor(Math.random() * 100);

  if (number % 2 === 0) {
    console.log(number, 'even');
  } else {
    console.log('odd', number);
  }
}
// % is the remainder or modulo in other programming languages; divide a by b and return the remainder.
numberSort();

let myNumberArray = [23, 54, 23, 78, 12, 256, 109, 876, 486];

// each number is how many sweets people collected for me.
// i need to put my array/sweets in numerical order smallest to largest
console.log(myNumberArray);
let sortedNumbers = myNumberArray.sort();
console.log(sortedNumbers);

// sort() converts numbers to strings before comparison, so they are in numeric order but as a string
// e.g. 101, 12, 23, 256, 78
// so it sorts it by alphabetical order

/**
 * would therefore need to use a sorting function instead to sort by numerical order.
 */

let trySort = myNumberArray.sort(function (a, b) {
  return a - b;
});

console.log(trySort);

// remove the last item from myArray
myNumberArray.pop();
console.log(myNumberArray);

function mySnackPicker() {
  let foodToEat = myArray[Math.floor(Math.random() * myArray.length)];
  console.log('eat this!', foodToEat);
}

mySnackPicker();

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'blueviolet'];

function colorChanger() {
  let box = document.getElementById('backgroundChange');
  let color = colors[Math.floor(Math.random() * colors.length)];
  box.style.width = '36rem';
  box.style.height = '50rem';
  box.style.backgroundColor = color;
}

colorChanger();
