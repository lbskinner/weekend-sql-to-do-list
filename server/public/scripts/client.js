$(document).ready(init);

function init() {
  console.log("DOM is ready!");
  // add event listener for add task button
  $(".js-add-task-btn").on("click", addTask);
  // add event listener for complete button
  $(".js-todo-list").on("click", ".js-btn-complete", completeTask);
  // add event listener for delete button
  $(".js-todo-list").on("click", ".js-btn-delete", deleteTask);
  // get all tasks when page loads
  getTasksFromServer();
}

// EVENT HANDLER

function addTask() {
  // validate input before send it to server
  if (!$(".js-input-new-task").val()) {
    alert("Please enter a new task!");
  } else {
    // store new task in an object
    const newTaskObject = {
      task: $(".js-input-new-task").val()
    };
    // send the new task object to server to save to database
    sendTaskToServer(newTaskObject);
  }
}

function completeTask(event) {
  // store the id of the task clicked in a variable
  const completedTaskId = event.target.dataset.id;
  console.log(`Completed Task Id: ${completedTaskId}`);
  // store the task id and the completed status in an object
  const completedTaskObject = {
    id: completedTaskId,
    completed: "true"
  };
  // send the object to server to update the completed status in database
  sendCompetedTaskToServer(completedTaskObject);
}

function deleteTask(event) {
  // store the id of the task clicked in a variable
  const deletedTaskId = event.target.dataset.id;
  console.log(`Deleted Task Id: ${deletedTaskId}`);
  // send the completed task id to server to be deleted from database
  sendDeleteTaskToServer(deletedTaskId);
}

// API INTERACTIONS

// get tasks
function getTasksFromServer() {
  $.ajax({
    method: "GET",
    url: "/tasks"
  })
    .then(response => {
      // display all tasks on the page
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
      // clear input box
      $(".js-input-new-task").val("");
      // after new task posted successfully, get all tasks from server to incorporate the new task
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
      // after task completed updated successfully, get all tasks to reflect the change
      getTasksFromServer();
    })
    .catch(error => {
      console.log(`PUT ERROR ${error}`);
    });
}

// delete task
function sendDeleteTaskToServer(taskId) {
  $.ajax({
    method: "DELETE",
    url: `/tasks/${taskId}`
  })
    .then(response => {
      console.log(`DELETE TASK: ${response}`);
      // after task deleted successfully, get all tasks to reflect the change
      getTasksFromServer();
    })
    .catch(error => {
      console.log(`DELETE ERROR ${error}`);
    });
}

// RENDER TO DOM
function renderAllTasks(taskArray) {
  $(".js-todo-list").empty();
  for (let task of taskArray) {
    let btnClass = "notComplete";
    let completeGtn = `<button class="js-btn-complete btn" data-id="${task.id}">Complete</button>`;
    if (task.completed === true) {
      btnClass = "isComplete";
      completeGtn = `<button class="js-btn-complete btn" data-id="${task.id}" disabled>Complete</button>`;
    }
    $(".js-todo-list").append(`
        <li><span class="${btnClass}">${task.task}</span> <div>${completeGtn} <button class="js-btn-delete btn" data-id="${task.id}">Delete</button></div></li>
        `);
  }
}
