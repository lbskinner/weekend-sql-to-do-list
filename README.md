# Weekend Challenge: SQL To-Do List

[Here](./INSTRUCTIONS.md) is the project instructions.

## Description

For this challenge, I created a To-Do List application. This application allows users to add new tasks, mark tasks complete and delete tasks. A user first inputs a new task and clicks on the "Add Task" button. If the user did not enter a new task, an alert message will pop up to ask the user to enter a new task. After the user clicks on the "Add Task" button, the task is sent to the server using an ajax POST call and is saved in a database. The completed status for the task created is set to "false" by default. The newly created task will also be displayed on the front end (using an ajax get call) in the reverse order the tasks were created (the most recent task on the top).

Each task has two buttons displayed next to it: a "Complete" button and a "Delete" button. Once the user completes a task, the user should click on the "Complete" button. The "Complete" button will be grayed out and the user will not be able to click on it again. The task name will also be crossed out. When the "Completed" button is clicked, an ajax PUT call is used to update the completed status of the task to "true" on the server. The task is still saved in the database and displayed on the page. The task is now displayed first by the completion status and order of creation.

The user can also click on the "Delete" button to delete that task. Once the "Delete" button is clicked, an ajax DELETE call is send to the server. That task will be deleted from the database and will no longer be displayed on the page.

## Screen Shot

![](screenshot.png)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- Node dependencies/frameworks: [express](https://expressjs.com/), [body-parser](https://www.npmjs.com/package/body-parser), [pg](https://www.npmjs.com/package/pg)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the .env file.

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`

## Built With

javascript, jquery, node, express, body-parser, pg, SQL, Postman, Postico, Postgres

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [beileiwang@gmail.com](beileiwang@gmail.com).
