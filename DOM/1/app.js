const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const listContainer = document.querySelector('.list-container');
const listItems = document.getElementsByTagName('li');

//for (let i = 0; i < listItems.length; i++) { //but it doesn't work for the new items
//   listItems[i].addEventListener('mouseover', () => {
//     listItems[i].textContent = listItems[i].textContent.toUpperCase();
//   });
// }

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('mouseover', () => {
//     listItems[i].classList.add('list-item-hover');
//   });
//   listItems[i].addEventListener('mouseout', () => {
//     listItems[i].classList.remove('list-item-hover');
//   });
// }

document.addEventListener('click', (event) => {
  console.log(event.target);
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