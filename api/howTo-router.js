const express = require("express");
const router = express.Router();

const users = require("../dbHelpers/user-model.js");
const restricted = require("../auth/restricted.js");

router.get("/", restricted, (req, res) => {
	users
		.listUsers().leftJoin('hacks', 'users.id', 'hacks.userID').select('users.firstName', 'users.lastName', 'hacks.*')
		.then((hacks) => {
			res.status(200).json(hacks);
		})
		.catch((err) => {
			res.status(500).json({ message: "Error fetching hacks", err });
		});
});

module.exports = router;
