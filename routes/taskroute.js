const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

// router.get("/", (req, res) => {

// });

router.post("/todo/add", async (req, res) => {
  const { newItem } = req.body;
  console.log(newItem);

  try {
    const task = new Task({
      title: newItem,
    });
    await task.save().then(() => {
      console.log("Successfully added the task ");
      res.redirect("/");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding task to the database");
  }
});

router.get("/delete/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Task.deleteOne({ _id })
    .then(() => {
      console.log("Deleted ToDo successfully");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
