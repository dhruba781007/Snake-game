const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
document.addEventListener('DOMContentLoaded', loadTasks);
addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText) {
        addTask(taskText);
        input.value = '';
    }
});
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task.text);
    });
}
function addTask(text) {
    const task = { text };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    createTaskElement(text);
}
function createTaskElement(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteTask(text);
        li.remove();
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}
function deleteTask(text) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
