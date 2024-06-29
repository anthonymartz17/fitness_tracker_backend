const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to my fitness app");
});

module.exports = app;
