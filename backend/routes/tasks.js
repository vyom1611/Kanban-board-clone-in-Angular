const router = require("express").Router();
const Task = require("../models/task")

//Create a task
router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(200).json(savedTask)
    } catch (error) {
        //Trying to log errors on every step of API
        res.status(500).json(error);
    }
});

//Get all tasks
router.post("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
