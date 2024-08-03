// 1. Declare variables and capture input.
const verbInput = prompt("Enter a verb");
const verb = verbInput;

const adjectiveInput = prompt("Enter an adjective");
const adjective = adjectiveInput;

const nounInput = prompt("Enter a noun");
const noun = nounInput;


// 2. Combine the input with other words to create a story.
const story = `<p>The grumpy ${noun} played the ${adjective} ukulele while ${verb} a gigantic ice cream cone.</p>`;


// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;