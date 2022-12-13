// get number of days left till Christmas from a certain date
function daysTillChristmas(date) {
  const xmas = new Date('2022-12-25');

  if (date.getTime() > xmas.getTime()) {
    xmas.setFullYear(xmas.getFullYear() + 1);
  }

  let milisecs = xmas.getTime() - date.getTime();

  let days = Math.ceil(milisecs / (1000 * 3600 * 24));
  return days;
}

console.log(daysTillChristmas(new Date()), 'days till Christmas!');
console.log(daysTillChristmas(new Date('2022-12-26')), 'days till Christmas!');

/**
 * decode a string using an offset number
 */

let alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// // decode a string array by an offset
// function decodeStringArray(array, offset) {
//   let newArr = [
//     ...array.map((letter) => {
//       let index = alpha.indexOf(letter);
//       return alpha[(index + 26 + offset) % 26];
//     }),
//   ];
//   return newArr.join('');
// }

// ^ don't need to be destructured then put back into an array!

function decodeStringArray(array, offset) {
  return array
    .map((letter) => {
      let index = alpha.indexOf(letter);
      return alpha[(index + 26 + offset) % 26];
    })
    .join('');
}

// decode this string using -10 letter offset
let myS = [
  'r',
  'o',
  'v',
  'v',
  'y',
  'r',
  'y',
  'g',
  'k',
  'b',
  'o',
  'i',
  'y',
  'e',
  'd',
  'y',
  'n',
  'k',
  'i',
];

let encode = [
  'h',
  'e',
  'l',
  'l',
  'o',
  'h',
  'o',
  'w',
  'a',
  'r',
  'e',
  'y',
  'o',
  'u',
  't',
  'o',
  'd',
  'a',
  'y',
];

console.log(decodeStringArray(myS, -10));
console.log(decodeStringArray(encode, 10));
