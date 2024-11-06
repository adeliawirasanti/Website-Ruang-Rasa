let tasks = [];

document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('filter-all').addEventListener('click', () => filterTasks('all'));
document.getElementById('filter-done').addEventListener('click', () => filterTasks('done'));
document.getElementById('filter-not-done').addEventListener('click', () => filterTasks('notDone'));

function addTask() {
    const taskText = document.getElementById('task-input').value;
    const taskDate = document.getElementById('date-input').value;
    const taskTime = document.getElementById('time-input').value;
    const taskPriority = document.getElementById('priority-input').value;

    if (taskText.trim() !== '') {
        const task = {
            text: taskText,
            date: taskDate,
            time: taskTime,
            priority: taskPriority,
            done: false
        };
        tasks.push(task);
        saveTasks();
        renderTasks();
        clearInputs();
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.text} | Due: ${task.date} ${task.time} | Priority: ${task.priority}`;
        if (task.done) {
            li.classList.add('done');
        }

        const doneButton = document.createElement('button');
        doneButton.textContent = task.done ? 'Undo' : 'Done';
        doneButton.addEventListener('click', () => toggleTaskDone(index));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function toggleTaskDone(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

function filterTasks(filter) {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'done') {
             return task.done === true; // Menampilkan tugas yang sudah selesai
         } else if (filter === 'notDone') {
             return task.done === false; // Menampilkan tugas yang belum selesai
        } else {
             return true; // Menampilkan semua tugas
        }
        });
    
        renderFilteredTasks(filteredTasks);
    }
    
    function renderFilteredTasks(filteredTasks) {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
    
        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${task.text} | Due: ${task.date} ${task.time} | Priority: ${task.priority}`;
            if (task.done) {
                li.classList.add('done');
            }
    
            const doneButton = document.createElement('button');
            doneButton.textContent = task.done ? 'Undo' : 'Done';
            doneButton.addEventListener('click', () => toggleTaskDone(index));
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(index));
    
            li.appendChild(doneButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
    