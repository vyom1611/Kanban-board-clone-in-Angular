const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const taskRoute = require("./routes/tasks")

const app = express()

app.use(express.json());

mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err));

app.use("/api/tasks", taskRoute)

app.listen(9800, () => {
    console.log("Backend server is running!");
});
