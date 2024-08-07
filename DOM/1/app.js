const btnMain = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');


btnMain.addEventListener('click', () => {
  const headline = document.getElementById('headline');
  const input = document.querySelector('.input-main');

  headline.className += 'grow'
  headline.textContent = input.value;
  input.value = '';
})

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') {
    listContainer.removeAttribute('style');
    btnToggle.textContent = 'Hide List';
  } else {
    listContainer.style.display = 'none';
    btnToggle.textContent = 'Show List';
  }
})