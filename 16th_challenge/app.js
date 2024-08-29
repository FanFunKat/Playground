// function countBirds() {
//   let count = 0;
//   function counter() {
//     count += 1;
//     return count + 'birds';
//   }
//   return counter;
// }

function makeBirdCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count + 'birds';
  }
}

const birdCounter = makeBirdCounter();

function makeDogCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count + 'dogs';
  }
}

const dogCounter = makeBirdCounter();