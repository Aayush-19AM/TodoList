document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const addButton = document.querySelector(".addTask > button");
  const notCompletedList = document.querySelector(".notCompleted");
  const completedList = document.querySelector(".Completed");
  const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");

  // Adding a task
  addButton.addEventListener("click", addTask);
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTask();
  });

  // Function to add a new task
  function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const newTask = createTaskElement(taskText);
    notCompletedList.appendChild(newTask);
    input.value = ""; // Clearing the input field to add new task  
  }

  // Create Task Element
  function createTaskElement(text) {
    const taskItem = document.createElement("li");
    taskItem.textContent = text;

    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa fa-check"></i>';
    taskItem.appendChild(checkButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    taskItem.appendChild(deleteButton);

    // Marking the tasks as Completed
    checkButton.addEventListener("click", () => {
      taskItem.remove();
      taskItem.innerHTML = taskItem.textContent.strike();
      completedList.appendChild(taskItem);
      checkButton.remove(); // Remove check button after completing the task
    });

    // Deleting the Task 
    deleteButton.addEventListener("click", () => taskItem.remove());

    return taskItem;
  }

  // Toggle Dark Mode
  toggleDarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
