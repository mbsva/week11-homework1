function createTask () {
    const task = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = document.getElementById('input').value;
    task.append(newTask);
    document.getElementById('input').value = '';
}

function checkTask (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}

// Добавляем обработчик клика на кнопку
document.getElementById('add').addEventListener('click', createTask);

// Добавляем обработчик клика на список задач
document.getElementById('task-list').addEventListener('click', checkTask);
