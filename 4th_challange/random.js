// Collect inputs from a user
const userInputLow = prompt("Please provide your lowest number");
const userInputHigh = prompt("Please provide your highest number")

// Convert the inputs to a number
const userNumberLow = parseInt(userInputLow);
const userNumberHigh = parseInt(userInputHigh);


const mainElement = document.querySelector('main');

// Use Math.random() and the user's number to generate a random number

if (userNumberLow && userInputHigh && userNumberLow < userNumberHigh) {
  const randomNumber = Math.floor(Math.random() * (userNumberHigh - userNumberLow + 1)) + userNumberLow;
  const message = `<p>${randomNumber} is random number between ${userNumberLow} and ${userNumberHigh}</p>`;
  mainElement.innerHTML = message;
} else if (userNumberLow && userNumberHigh && userNumberLow > userNumberHigh) {
  const message = `<p>${userNumberHigh} is lower than ${userNumberLow}, please try again</p>`;
  mainElement.innerHTML = message;
} else if (userNumberLow && userNumberHigh && userNumberLow === userNumberHigh) {
  const message = `<p>${userNumberHigh} is equal to ${userNumberLow}, please try again</p>`;
  mainElement.innerHTML = message;
} else if (!userNumberLow && userNumberHigh) {
  const errorMessage = `<p>'${userInputLow}' is not a number</p>`;
  mainElement.innerHTML = errorMessage;
} else if (userNumberLow && !userNumberHigh) {
  const errorMessage = `<p>'${userInputHigh}' is not a number</p>`;
  mainElement.innerHTML = errorMessage;
} else {
  const errorMessage = `<p>'${userInputLow}' and '${userInputHigh}' are not numbers</p>`;
  mainElement.innerHTML = errorMessage;
}