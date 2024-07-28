let name: string | null = prompt('What is your name?');
alert(`Hello ${name}. Want to see something cool?`);

if(name) {
  alert(`Hello ${name}. Want to see something cool?`);
  document.querySelector('html')!.innerHTML =`
  <h1>Welcome to ${name}'s website</h1>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif">
  `;
};
