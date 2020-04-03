$(document).ready(init);

function init() {
  console.log("DOM is ready!");

  // get all tasks when page loads
  getTasks();
}

// EVENT HANDLER

// get tasks
function getTasks() {
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

// API INTERACTIONS

// RENDER TO DOM
function renderAllTasks(taskArray) {
  $(".js-todo-list").empty();
  for (let task of taskArray) {
    $(".js-todo-list").append(`
        <li>${task.task} <button class"js-btn-complete">Complete</button> <button class"js-btn-delete">Delete</button></li>
        `);
  }
}
