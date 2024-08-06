// const body = document.body

// body.addEventListener('click', () => {
//   body.innerHTML = '<h1>Hello World!</h1>';
// });

// const btnMain = document.getElementById('btn-main'); 
const btnMain = document.querySelector('.btn-main');

// const items = document.getElementsByTagName('li'); //HTMLCollection
const items = document.querySelectorAll('li'); //NodeList


// const highlights = document.getElementsByClassName('highlight'); //HTMLCollection
const highlights = document.querySelectorAll('.highlight'); //NodeList

for (const highlight of highlights) {
  highlight.style.color = 'orchid';
}

for (const item of items) {
  item.style.backgroundColor = 'lightblue';
}

btnMain.addEventListener('click', () => {
  btnMain.style.border = '1px solid red';
});

