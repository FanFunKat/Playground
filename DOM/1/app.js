const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');


btnCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  const item = document.createElement('li');

  item.textContent = input.value;
  input.value = '';

  list.prepend(item); // at the top of the list

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