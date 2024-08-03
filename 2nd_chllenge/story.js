// 1. Declare variables and capture input.
const verb = prompt("Enter a verb");
const adjective = prompt("Enter an adjective");
const noun = prompt("Enter a noun");


// 2. Combine the input with other words to create a story.
const story = `<p>The grumpy ${noun} played the ${adjective} ukulele while ${verb} a gigantic ice cream cone.</p>`;


// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;