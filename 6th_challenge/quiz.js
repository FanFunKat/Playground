// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
  {
    question: "What has keys but can't open locks?",
    answer: "a piano"
  },
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "an echo"
  },
  {
    question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
    answer: "a candle"
  },
];


// 2. Store the number of questions answered correctly
let correctAnswers = 0;
const right = [];
const wrong = [];

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < quiz.length; i++) {
  const question = prompt(quiz[i].question);
  if (quiz[i].answer === question.toLowerCase()) {
    right.push(quiz[i].question);
    correctAnswers++;
  } else {
    wrong.push(quiz[i].answer);
  };
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}


// 4. Display the number of correct answers to the user
message = `
<h1>You got <strong>${correctAnswers}</strong> question(s) correct</h1>
<h2>You got this question(s) right: </h2>
  <ol>${createListItems(right)}</ol>
<h2>You got this question(s) wrong: </h2>
  <ol>${createListItems(wrong)}</ol>
`
document.querySelector('main').innerHTML = `${message}`