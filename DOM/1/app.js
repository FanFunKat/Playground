const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const listContainer = document.querySelector('.list-container');
const firstItem = document.getElementsByTagName('li')[0];

firstItem.addEventListener('mouseover', () => {
  firstItem.textContent = firstItem.textContent.toUpperCase();
});

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
  if (listContainer.style.display === 'none') {
    listContainer.removeAttribute('style');
    btnToggle.textContent = 'Hide List';
  } else {
    listContainer.style.display = 'none';
    btnToggle.textContent = 'Show List';
  }
});

btnRemove.addEventListener('click', () => {
  const lastItems = document.querySelector('li:last-child');
  lastItems.remove();
});