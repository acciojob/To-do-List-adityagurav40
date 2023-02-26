//your code here
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText !== '') {
    const newTodo = document.createElement('li');
    newTodo.textContent = newTodoText;
    todoList.appendChild(newTodo);
    newTodoInput.value = '';
  }
});
