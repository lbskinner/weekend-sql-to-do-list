const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");

// get route
taskRouter.get("/", (req, res) => {
  const queryText = `SELECT * FROM "tasks" ORDER BY "completed", "task" ASC;`;
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

// put/update route

// delete route

module.exports = taskRouter;
