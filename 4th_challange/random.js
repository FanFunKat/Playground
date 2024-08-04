// Collect inputs from a user
// const userInputLow = prompt("Please provide your lowest number");
// const userInputHigh = prompt("Please provide your highest number")

// Convert the inputs to a number
// const userNumberLow = parseInt(userInputLow);
// const userNumberHigh = parseInt(userInputHigh);

const mainElement = document.querySelector('main');

/**
 * It generates a random number between two numbers provided by the user.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @returns {string} Message with random number between lower and higher number or error message.
 */

function getRandom(lower, upper) {
  let message = ``;

  if (lower && upper && lower < upper) {
    const randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    message = `<p>${randomNumber} is random number between ${lower} and ${upper}</p>`;
  } else if (lower && upper && lower > upper) {
    message = `<p>${upper} is lower than ${lower}, please try again</p>`;
  } else if (lower && upper && lower === upper) {
    message = `<p>${upper} is equal to ${lower}, please try again</p>`;
  } else {
    message = `<p>Error! Both inputs must be numbers.</p>`;
  }

  return message
}

// Display the message for users in prompt, change string to number!
const minNumb = parseInt(prompt("Please provide your lowest number"));
const maxNumb = parseInt(prompt("Please provide your highest number"));

mainElement.innerHTML = getRandom(minNumb, maxNumb);