const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/Polling_Api");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database :: MongoDB");
});

module.export = db;
