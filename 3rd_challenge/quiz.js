/*
  1. Store correct answers
  - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player

let playerRank = " ";

// 3. Select the <main> HTML element
const mainElement = document.querySelector("main");

/*
  4. Ask at least 5 questions
  - Store each answer in a variable
  - Keep track of the number of correct answers
*/
const questionOne = prompt("1. What is the capital of France?");
if (questionOne.toUpperCase() === "PARIS") {
  correctAnswers++;
}

const questionTwo = prompt("2. What is the capital of Germany?");
if (questionTwo.toUpperCase() === "BERLIN") {
  correctAnswers++;
}

const questionThree = prompt("3. What is the capital of Italy?");
if (questionThree.toUpperCase() === "ROME") {
  correctAnswers++;
}

const questionFour = prompt("4. What is the capital of Spain?");
if (questionFour.toUpperCase() === "MADRID") {
  correctAnswers++;
}

const questionFive = prompt("5. What is the capital of Portugal?");
if (questionFive.toUpperCase() === "LISBON") {
  correctAnswers++;
}

/*
  5. Rank player based on number of correct answers
  - 3-4 correct = Silver
  - 5 correct = Gold
  - 1-2 correct = Bronze
  - 0 correct = No crown
*/
if (correctAnswers === 5) {
  playerRank = "Gold";
} else if (correctAnswers === 4 || correctAnswers === 3) {
  playerRank = "Silver";
} else if (correctAnswers === 2 || correctAnswers === 1) {
  playerRank = "Bronze";
} else {
  playerRank = "No crown";
}

// 6. Output results to the <main> element
mainElement.innerHTML = `
  <h2>You got ${correctAnswers} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${playerRank}</strong></p>`
