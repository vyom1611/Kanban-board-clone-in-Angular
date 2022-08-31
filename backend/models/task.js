const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    color: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Task", TaskSchema);
