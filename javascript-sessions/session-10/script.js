/** Using two separate array's of numbers find the largest number
 * from both ,
 * Then using those  2 numbers  see if they have the same number
 * they are both divisible by with no remainder.
 * example
 *
 * If my  2 bigest numbers are 24 and  48
 * the answear would be 1, 2, 4, 6 ,8 .....
 *
 * if my biggest 2 numbers were  5 and 10
 * the answear would be 1, 5
 */

function makeArray(length) {
  let arr = [];
  while (length > 0) {
    arr.push(Math.floor(Math.random() * 100));
    length--;
  }
  return arr;
}

let arr1 = makeArray(10);
let arr2 = makeArray(10);

console.log(arr1);
console.log(arr2);

let max1 = Math.max(...arr1);
let max2 = Math.max(...arr2);

function findDivisible(num1, num2) {
  let index = Math.min(num1, num2);

  let nums = [];
  while (index > 0) {
    if (num1 % index === 0 && num2 % index === 0) nums.push(index);
    index--;
  }
  return nums;
}

console.log(findDivisible(max1, max2));

/**
 * select filter function in the html
 *
 */
const filterSelect = document.querySelector('#filter-select');
const filtered = document.querySelectorAll('.filtered li');
console.log(filtered);

filterSelect.addEventListener('change', (e) => {
  filtered.forEach((el) => {
    if (
      el.dataset.search.includes(e.target.value) ||
      e.target.value === 'all'
    ) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});
