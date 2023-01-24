const express = require("express");
const port = 8000;
const app = express();
// for mongoDB connection setup
const db = require("./config/mongoose");

app.use(express.urlencoded());

// use express router
app.use("/", require("./routes"));

// server listening on port

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in connection the database ${err}`);
    return;
  }
  console.log(`Server is running at the port ${port}`);
});
