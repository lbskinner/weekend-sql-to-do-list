const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const taskRouter = require("./routes/task.router");

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static file
app.use(express.static("server/public"));

//configure routes
app.use("/tasks", taskRouter);

// runs the server
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
