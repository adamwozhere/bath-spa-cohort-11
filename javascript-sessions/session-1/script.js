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
