const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const dbConnect = require("./config/db");
//using EJS
const ejs = require("ejs");
app.set("view engine", "ejs");

//router setup
const todo = require("./routes/taskroute");
app.use(todo);
app.use(require("./routes/index"));

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  res.send(newItem);
});

//connecting Database
dbConnect();
//listen the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listed on PORT ${PORT}`);
});
