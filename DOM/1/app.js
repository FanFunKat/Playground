// const body = document.body

// body.addEventListener('click', () => {
//   body.innerHTML = '<h1>Hello World!</h1>';
// });

const headline = document.getElementById('headline');
const btnMain = document.getElementById('btn-main');

btnMain.addEventListener('click', () => {
  headline.style.border = '1px solid red';
});