const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/short-url", {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("connection active");
});

// REDO THIS //
const Task = mongoose.model("Task", {
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean
  }
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// The index page
app.get("/", function(req, res) {
  res.send("The index page");
});

// Post url and shorten
app.post("/shorten", function(req, res) {
  res.send("Submit here");
});

// Find long URL from short, and redirect
app.get("/:key", function(req, res) {
  res.send("Your key was: " + req.key);
});

app.all("*", (req, res) => {
  res.status(404).end();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port" ${process.env.PORT}`);
  console.log(`Current environment is ${process.env.NODE_ENV}`);
});
