/**
 * It generates a random number between two numbers provided by the user.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @returns {number} Random number between the two numbers provided by the user.
 */

function getRandom(lower, upper) {
  if (isNaN(lower) || isNaN(upper)) {
    throw Error('Both inputs must be numbers.');
  } else {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
  }
}

// const mainElement = document.querySelector('main');
// const minNumber = parseInt(prompt("Please provide your lowest number"));
// const maxNumber = parseInt(prompt("Please provide your highest number"));

// if (isNaN(minNumber) || isNaN(maxNumber)) {
//   mainElement.innerHTML = `<p>Please provide valid numbers.</p>`;
// } else {
//   mainElement.innerHTML = `<p>${getRandom(minNumber, maxNumber)} is random number between ${minNumber} and ${maxNumber}</p>`;
// }

// while loop
let counter = 0;

while (counter < 10) {
  console.log(`While - the random number is ${getRandom(1, 10)}`);
  counter++;
}

// do while loop
let counter2 = 0;

do {
  console.log(`DoWhile - The random number is ${getRandom(10, 20)}`);
  counter2++;
} while (counter2 < 10);