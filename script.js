const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListUl = document.getElementById('task-list-ul');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const task = {
            name: taskName,
            dueDate: '',
            category: '',
            priority: '',
            completed: false
        };
        tasks.push(task);
        renderTaskList();
        taskInput.value = '';
    }
}

function renderTaskList() {
    taskListUl.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskLi = document.createElement('li');
        taskLi.innerHTML = `
            <span class="task-name">${task.name}</span>
            <span class="task-due-date">${task.dueDate}</span>
            <span class="task-category">${task.category}</span>
            <span class="task-priority">${task.priority}</span>
            <button class="delete-btn">Delete</button>
            <button class="complete-btn">Complete</button>
        `;
        taskListUl.appendChild(taskLi);
    });
}

taskListUl.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskListUl.children, e.target.parentNode);
        tasks.splice(taskIndex, 1);
        renderTaskList();
    } else if (e.target.classList.contains('complete-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskListUl.children, e.target.parentNode);
        tasks[taskIndex].completed = true;
        renderTaskList();
    }
});