document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    const updateTaskNumbers = () => {
        const tasks = taskList.querySelectorAll("li span.task-number");
        tasks.forEach((task, index) => {
            task.textContent = `${index + 1}.`;
        });
    };

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement("li");

        const taskNumber = document.createElement("span");
        taskNumber.classList.add("task-number");
        taskNumber.textContent = `${taskList.children.length + 1}.`;

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");
        taskSpan.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
            updateTaskNumbers();
        });

        taskItem.appendChild(taskNumber);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    });
});

