const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


addButton.addEventListener('click', addTask);


function addTask() {
  const text = taskInput.value.trim();

  if (text === '') {
    alert('Please enter a task before adding.');
    return;
  }

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = text;

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  completeButton.addEventListener('click', () => {
    const isCompleted = taskSpan.style.textDecoration === 'line-through';
    taskSpan.style.textDecoration = isCompleted ? 'none' : 'line-through';
  });

  deleteButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(taskSpan);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}
