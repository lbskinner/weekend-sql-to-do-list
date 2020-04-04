$(document).ready(init);

function init() {
  console.log("DOM is ready!");
  // add event listener for add task button
  $(".js-add-task-btn").on("click", addTask);
  // add event listener for complete button
  $(".js-todo-list").on("click", ".js-btn-complete", completeTask);
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

function completeTask(event) {
  const completedTaskId = event.target.dataset.id;
  console.log(`Completed Task Id: ${completedTaskId}`);
  const completedTaskObject = {
    id: completedTaskId,
    completed: "true"
  };
  sendCompetedTaskToServer(completedTaskObject);
}

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
function sendCompetedTaskToServer(taskObject) {
  $.ajax({
    method: "PUT",
    url: `/tasks/${taskObject.id}`,
    data: taskObject
  })
    .then(response => {
      console.log(`PUT TASK: ${response}`);
      getTasksFromServer();
    })
    .catch(error => {
      console.log(`PUT ERROR ${error}`);
    });
}

// delete task
function sendDeleteTaskToServer(taskObject) {}

// RENDER TO DOM
function renderAllTasks(taskArray) {
  $(".js-todo-list").empty();
  for (let task of taskArray) {
    $(".js-todo-list").append(`
        <li>${task.task} <button class="js-btn-complete" data-id="${task.id}">Complete</button> <button class="js-btn-delete" data-id="${task.id}">Delete</button></li>
        `);
  }
}
