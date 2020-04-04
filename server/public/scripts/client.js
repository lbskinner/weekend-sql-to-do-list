$(document).ready(init);

function init() {
  console.log("DOM is ready!");
  // add event listener for add task button
  $(".js-add-task-btn").on("click", addTask);
  // add event listener for complete button

  // add event listener for delete button

  // get all tasks when page loads
  getTasksFromServer();
}

// EVENT HANDLER

function addTask() {
  const newTaskObject = {
    task: $(".js-input-new-task").val()
  };
  sendTaskToServer(newTaskObject);
}

function completeTask() {}

function deleteTask() {}

// API INTERACTIONS

// get tasks
function getTasksFromServer() {
  $.ajax({
    method: "GET",
    url: "/tasks"
  })
    .then(response => {
      renderAllTasks(response);
    })
    .catch(error => {
      console.log(`GET ERROR ${error}`);
    });
}

// post task
function sendTaskToServer(taskObject) {
  $.ajax({
    method: "POST",
    url: "/tasks",
    data: taskObject
  })
    .then(response => {
      console.log(`POST TASK: ${response}`);
      getTasksFromServer();
    })
    .catch(error => {
      console.log(`POST ERROR ${error}`);
    });
}

// put/complete task
function sendCompetedTaskToServer() {}

// delete task
function sendDeleteTaskToServer() {}

// RENDER TO DOM
function renderAllTasks(taskArray) {
  $(".js-todo-list").empty();
  for (let task of taskArray) {
    $(".js-todo-list").append(`
        <li>${task.task} <button class"js-btn-complete">Complete</button> <button class"js-btn-delete">Delete</button></li>
        `);
  }
}
