const express = require("express");
const workoutController = require("./controllers/workoutController");
const app = express();
app.use(express.json());
app.use("/workouts", workoutController);
app.get("/", (req, res) => {
	res.send("Welcome to my fitness app");
});

app.get("*", (req, res) => {
	res.status(404).json({ msg: "Sorry, Page not found" });
});

module.exports = app;
