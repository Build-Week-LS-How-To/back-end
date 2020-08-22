const express = require("express");
const router = express.Router();

const users = require("../dbHelpers/user-model.js");
const restricted = require("../auth/restricted.js");

router.get("/", restricted, (req, res) => {
	users
		.listUsers()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ message: "Error fetching users", err });
		});
});

module.exports = router;
