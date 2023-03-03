// from a given word count the number a's (or a letters)

function letterCount(word, letter) {
  let count = 0;
  Array.from(word).forEach((character) => {
    if (character === letter) count += 1;
  });
  return count;
}

console.log(letterCount('banana', 'a'));
console.log(letterCount('battery', 't'));
