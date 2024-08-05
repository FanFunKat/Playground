// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
  ["What has keys but can't open locks?", "A piano"],
  ["I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", "An echo"],
  ["I'm tall when I'm young, and I'm short when I'm old. What am I?", "A candle"]
];


// 2. Store the number of questions answered correctly
const correctAnswers = 0;

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/


// 4. Display the number of correct answers to the user
message = `<p>You got ${correctAnswers} question(s) correct</p>`
document.querySelector('main').innerHTML = `${message}`