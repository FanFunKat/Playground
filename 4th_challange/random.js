// Collect inputs from a user
const userInput = prompt("Please enter your number");
const userSecondInput = prompt("Please enter a higher number than the previous one")

// Convert the inputs to a number
const userNumber = parseInt(userInput);
const userHigherNumber = parseInt(userSecondInput);


const mainElement = document.querySelector('main');

// Use Math.random() and the user's number to generate a random number

if (userNumber && userHigherNumber && userNumber < userHigherNumber) {
  const randomNumber = Math.floor(Math.random() * (userHigherNumber - userNumber + 1)) + userNumber;
  const message = `<p>${randomNumber} is random number between ${userNumber} and ${userHigherNumber}</p>`;
  mainElement.innerHTML = message;
} else if (userNumber && userHigherNumber && userNumber > userHigherNumber) {
  const message = `<p>${userHigherNumber} is lower than ${userNumber}, please try again</p>`;
  mainElement.innerHTML = message;
} else if (userNumber && userHigherNumber && userNumber === userHigherNumber) {
  const message = `<p>${userHigherNumber} is equal to ${userNumber}, please try again</p>`;
  mainElement.innerHTML = message;
} else if (!userNumber && userHigherNumber) {
  const errorMessage = `<p>'${userInput}' is not a number</p>`;
  mainElement.innerHTML = errorMessage;
} else if (userNumber && !userHigherNumber) {
  const errorMessage = `<p>'${userSecondInput}' is not a number</p>`;
  mainElement.innerHTML = errorMessage;
} else {
  const errorMessage = `<p>'${userInput}' and '${userSecondInput}' are not numbers</p>`;
  mainElement.innerHTML = errorMessage;
}