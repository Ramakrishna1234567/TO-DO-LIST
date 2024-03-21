// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = '<span onclick="editTask(this)">✎</span>' + taskInput.value + '<span onclick="deleteTask(this)">❌</span>';
    taskList.appendChild(li);

    taskInput.value = "";
}

// Function to delete a task
function deleteTask(element) {
    var li = element.parentElement;
    li.remove();
}

// Function to edit a task
function editTask(element) {
    var newText = prompt("Edit task:", element.nextSibling.textContent.trim());
    if (newText !== null) {
        element.nextSibling.textContent = newText;
    }
}
