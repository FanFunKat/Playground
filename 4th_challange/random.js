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
 * @param {number} userNumberLow - Lower number
 * @param {number} userNumberHigh - Higher number
 * @returns {number} random number between lower number and higher number
 */


function getRandom(userNumberLow, userNumberHigh) {
  let message = ``;

  if (userNumberLow && userNumberHigh && userNumberLow < userNumberHigh) {
    const randomNumber = Math.floor(Math.random() * (userNumberHigh - userNumberLow + 1)) + userNumberLow;
    message = `<p>${randomNumber} is random number between ${userNumberLow} and ${userNumberHigh}</p>`;
  } else if (userNumberLow && userNumberHigh && userNumberLow > userNumberHigh) {
    message = `<p>${userNumberHigh} is lower than ${userNumberLow}, please try again</p>`;
  } else if (userNumberLow && userNumberHigh && userNumberLow === userNumberHigh) {
    message = `<p>${userNumberHigh} is equal to ${userNumberLow}, please try again</p>`;
  } else {
    message = `<p>Error! Both inputs must be numbers.</p>`;
  }

  return message
}

// Display the message for users in prompt, change string to number!
const minNumb = parseInt(prompt("Please provide your lowest number"));
const maxNumb = parseInt(prompt("Please provide your highest number"));

mainElement.innerHTML = getRandom(minNumb, maxNumb);