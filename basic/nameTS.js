var name = prompt('What is your name?');
alert("Hello ".concat(name, ". Want to see something cool?"));
if (name) {
    alert("Hello ".concat(name, ". Want to see something cool?"));
    document.querySelector('html').innerHTML = "\n  <h1>Welcome to ".concat(name, "'s website</h1>\n  <img src=\"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif\">\n  ");
}
;
