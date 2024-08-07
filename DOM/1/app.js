const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');


btnCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');

  list.insertAdjacentHTML(
    'afterbegin',
    `<li class="list-item">${input.value}</li>`
  );
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