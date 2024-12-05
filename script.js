// Document api code to be added in here
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

addTaskButton.addEventListener("click", () => {
  saveTasks();
});

todoList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "BUTTON") {
    // e.target.parentElement.remove();
    e.target.parentElement.classList.toggle("completed");
  }
});
function saveTasks() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  todoInput.value = "";
}

// TODO Need to implement local storage
