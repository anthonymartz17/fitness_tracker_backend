const express = require("express");
const workout = express.Router();
const workoutModel = require("../models/workout.js");

workout.get("/", (req, res) => {
	res.status(200).json(workoutModel);
});

workout.get("/:id", (req, res) => {
	const { id } = req.params;

	const workout = workoutModel.find((ele) => ele.id === +id);

	if (workout) {
		res.status(200).json(workout);
	} else {
		res.status(404).json({ msg: `Workout with id:${id}, not found` });
	}
});

//create
workout.post("/", (req, res) => {
	const currentWorkout = req.body;
	workoutModel.push(currentWorkout);
	res.status(200).json(workoutModel[workoutModel.length - 1]);
});
module.exports = workout;

//update

workout.put("/:id", (req, res) => {
	const { id } = req.params;
	const idx = workoutModel.findIndex((ele) => ele.id === +id);
	if (idx !== -1) {
		workoutModel[idx] = { ...workoutModel[idx], ...req.body };
		res.status(200).redirect("/workouts");
	} else {
		res.status(404).json({ msg: `Workout with id:${id} not found` });
	}
});

//delete

workout.delete("/:id", (req, res) => {
	const { id } = req.params;
	const idx = workoutModel.findIndex((ele) => ele.id === +id);
	if (idx !== -1) {
		const deletedWorkout = workoutModel.splice(idx,1)
		res.status(200).redirect("/workouts");
	} else {
		res.status(404).json({ msg: `Workout with id:${id} not found` });
	}
});
