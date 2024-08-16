function markCompleted(tasks, taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
    }
    return tasks;
}

const tasks = [
    { id: 1, name: 'Buy food', completed: false },
    { id: 2, name: 'Walk Max', completed: false },
    { id: 3, name: 'Hang out with my friend', completed: false }
];

const taskUpdated = 1;
const updatedTaskList = markCompleted(tasks, taskUpdated);
console.log(updatedTaskList);
