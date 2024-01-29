const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

router.get("/", async (req, res) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();

  const day = today.toLocaleDateString("en-US", options);

  const allTodo = await Task.find();
  //console.log(allTodo);
  res.render("list", { todoall: allTodo, day: day });
});

module.exports = router;
