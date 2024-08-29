function makeCounter(noun) {
  let count = 0;
  return function () {
    count += 1;
    return `${count} ${noun}`;
  }
}

const birdCounter = makeCounter('birds');
const dogCounter = makeCounter('dogs');

console.log(birdCounter()); // 1 bird
console.log(dogCounter()); // 1 dogs
console.log(birdCounter());
console.log(dogCounter());