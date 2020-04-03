const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static file
app.use(express.static("server/public"));

// runs the server
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
