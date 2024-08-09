const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const listContainer = document.querySelector('.list-container ul');
const listItems = listContainer.children;
// console.log(listItems);

function attachRemoveButton(li) {
  let removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.textContent = 'Remove';
  li.appendChild(removeBtn);
};

for (let i = 0; i < listItems.length; i++) {
  attachRemoveButton(listItems[i]);
}

listContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    li.remove()
  }
});

btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveButton(li);
  ul.appendChild(li);
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