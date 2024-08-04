let html = '';
let randomRGB;

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

for (let i = 1; i <= 100; i++) {
  randomRGB = `rgb( ${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;