// Collect input from a user
const userInput = prompt("Pleas enter your number");

// Convert the input to a number
const userNumber = parseInt(userInput);

// Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor(Math.random() * userNumber) + 1;

// Create a message displaying the random number
const mainElement = document.querySelector('main');
const message = `<p>${randomNumber} is random number between 1 and ${userNumber}</p>`
mainElement.innerHTML = message

