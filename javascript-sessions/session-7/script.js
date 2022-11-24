/**
 * Write a JavaScript program to check whether three given integer values
 * are in the range 50..99 (inclusive).
 * Return true if one or more of them are in the said range.
 */

function isInRange(...numbers) {
  for (let num of numbers) {
    if (num >= 50 && num <= 99) return true;
  }
  return false;
}

console.log('isInRange()');
console.log(isInRange(20, 60, 120)); // true (60)
console.log(isInRange(100, 200, 101)); // false (all over 99)
console.log(isInRange(500, 100, 200, 76, 99)); // true (99)
console.log(isInRange(156, 200, 111, 101, 600)); // false (all over 99)

/**
 * Given an string x,
 * write a function that returns true if x is a palindrome (same forwards as backwards)
 * and false if not.
 */

function isPalindrome(word) {
  const reverse = [...word].reverse().join('');
  console.log(word, reverse);
  //return word.toLowerCase() === reverse.toLowerCase() ? true : false;
  return word.toLowerCase() === reverse.toLowerCase();
}

console.log('isPalindrome()');
console.log(isPalindrome('chocolate'));
console.log(isPalindrome('Hannah'));
// this method doesn't work for special unicode characters as they are actually two characters:
// (when they are reversed they don't make the same character anymore)
console.log(isPalindrome('foo 𝌆 bar mañana mañana'));
