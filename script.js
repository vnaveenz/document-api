document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let localtasks = JSON.parse(localStorage.getItem("tasks")) || [];

  localtasks.forEach((task) => {
    renderTasks(task);
  });

  addTaskButton.addEventListener("click", () => {
    saveTasks();
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      // e.target.parentElement.remove();
      e.target.parentElement.classList.toggle("completed");
    }
  });
  function saveTasks() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;
    let taskDefinition = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    localtasks.push(taskDefinition);
    renderTasks(taskDefinition);
    localStorage.setItem("tasks", JSON.stringify(localtasks));
    todoInput.value = "";
  }

  // TODO Need to implement local storage
  function renderTasks(taskItem) {
    const li = document.createElement("li");
    li.textContent = taskItem.text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
