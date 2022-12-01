/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

    Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

const convertToCamelCase = (string) => {
  const split = string.trim().toLowerCase().replaceAll('_', '-').split('-');

  console.log(split);

  const result = split.map((word, index) => {
    if (index === 0) return word;
    return word[0].toUpperCase() + word.substring(1);
  });
  return result.join('');
};

console.log(convertToCamelCase(' kebab-Case-sTring '));
console.log(convertToCamelCase(' sNake_casE_String'));

/**
 *  Fortune teller function
    it takes four parameters children,partners name, location, jobtitle
    it outputs to the id fortuneTeller in the html file
    " you will ba a jobTitle in a location and married to partnersName and have children children"
    function needs to have four different values for each parameter
*/

const children = ['2', '3', '4', '5'];
const partners = ['Harriet', 'Emma', 'Jenny', 'Millie'];
const locations = ['Spain', 'Japan', 'Canada', 'Australia'];
const jobs = ['Web Developer', 'Designer', 'Civil Servant', 'Spy'];

const tellFortune = (children, partner, location, job) => {
  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return `You will be a ${pickRandom(job)} in ${pickRandom(
    location
  )} and married to ${pickRandom(partner)} and have ${pickRandom(
    children
  )} children.`;
};

console.log(tellFortune(children, partners, locations, jobs));

/** build a function  that can calculate and show the following
 *  use math random to  produce  number array with 10 or more random numbers (don't make it endless)
 *  The mean number
 *  The smallest number
 * The largest number
 *  all the even numbers
 * all the odd numbers
 *
 * string output =
 *  The numbers were {}, The mean number is {}, The smallest number was {}, The  largest number was {}, The even numbers are {}, The odd numbers are {}.
 *
 *             I CAN SOLVE PROBLEMS WITH JAVASCRIPT!!!!!!!
 */

const calculate = (amount) => {
  const nums = [...new Array(amount)].map(() =>
    Math.floor(Math.random() * 100)
  );
  console.log(nums);

  const smallest = Math.min(...nums);
  const largest = Math.max(...nums);
  const evens = nums.filter((n) => n % 2 === 0);
  const odds = nums.filter((n) => n % 2 === 1);
  const mean = nums.reduce((acc, curr) => acc + curr) / nums.length;

  return `The numbers were ${nums.join(',')},
  The mean number is ${mean},
  The smallest number was ${smallest},
  The largest number was ${largest},
  The even numbers are ${evens},
  The odd numbers are ${odds},
  I CAN SOLVE PROBLEMS WITH JAVASCRIPT!!!!!!!`;
};

console.log(calculate(10));
