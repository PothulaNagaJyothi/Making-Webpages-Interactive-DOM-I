const list = document.querySelector('#item-list');
const button = document.querySelector('#add-btn');

button.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  list.appendChild(newItem);

  const index = list.children.length;

  if (index % 2 !== 0) {
    newItem.style.fontWeight = 'bold';
    newItem.style.color = 'blue';
  } else {
    newItem.style.fontStyle = 'italic';
    newItem.style.color = 'red';
  }
});
