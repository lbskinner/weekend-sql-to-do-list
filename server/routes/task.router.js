const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");

// get route
taskRouter.get("/", (req, res) => {
  const queryText = `SELECT * FROM "tasks" ORDER BY "completed", "id" DESC;`;
  pool
    .query(queryText)
    .then(responseFromDb => {
      console.log(responseFromDb.rows); // data on "rows" of response from database
      res.send(responseFromDb.rows);
    })
    .catch(error => {
      console.log(`GET ERROR: ${error}`);
      res.sendStatus(500); // internal server error
    });
});

// post route
taskRouter.post("/", (req, res) => {
  const newTaskToAdd = req.body;
  const queryText = `INSERT INTO "tasks" ("task") VALUES ($1);`;
  pool
    .query(queryText, [newTaskToAdd.task])
    .then(responseFromDb => {
      res.sendStatus(201); // created
    })
    .catch(error => {
      console.log(`POST ERROR: ${error}`);
      res.sendStatus(500);
    });
});

// put/update route
taskRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const updatedTaskData = req.body;
  const queryText = `UPDATE "tasks" SET "completed" = $1 WHERE "id" = $2;`;
  pool
    .query(queryText, [updatedTaskData.completed, taskId])
    .then(responseFromDb => {
      res.sendStatus(200); // OK
    })
    .catch(error => {
      console.log(`PUT ERROR: ${error}`);
      res.sendStatus(500);
    });
});

// delete route
taskRouter.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  const queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
  pool
    .query(queryText, [taskId])
    .then(responseFromDb => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(`DELETE ERROR: ${error}`);
      res.sendStatus(500);
    });
});

module.exports = taskRouter;
