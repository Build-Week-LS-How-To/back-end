const express = require("express");
const router = express.Router();

const users = require("../dbHelpers/user-model.js");
const hacks = require("../dbHelpers/hacks-model.js");
const restricted = require("../auth/restricted.js");

//Gets all hacks
router.get("/", (req, res) => {
	users
		.listUsers()
		.leftJoin("hacks", "users.id", "hacks.userID")
		.select("users.firstName", "users.lastName", "hacks.*")
		.then((hacks) => {
			res.status(200).json(hacks);
		})
		.catch((err) => {
			res.status(500).json({ message: "Error fetching hacks", err });
		});
});

//Gets users
router.get("/users", (req, res) => {
	users
		.listUsers()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Gets user by id
router.get("/users/:id", (req, res) => {
	const { id } = req.params;
	users
		.findById(id)
		.then((user) => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: "Cannot find user with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Gets all steps
router.get("/steps", (req, res) => {
	hacks
		.listSteps()
		.then((steps) => {
			res.status(200).json(steps);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Gets hack by ID
router.get("/:id", (req, res) => {
	const { id } = req.params;
	hacks
		.findHackById(id)
		.then((hack) => {
			if (hack) {
				res.json(hack);
			} else {
				res.status(404).json({ message: "Could not find hack with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get hack", err });
		});
});

//Add a hack
router.post("/", (req, res) => {
	const hackData = req.body;
	hacks
		.addHack(hackData)
		.then((newHack) => {
			res.status(201).json(newHack);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new hack", err });
		});
});

//Add a step
router.post("/steps", (req, res) => {
	const stepData = req.body;
	hacks
		.addStep(stepData)
		.then((newStep) => {
			res.status(201).json(newStep);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new step", err });
		});
});

//Update a hack
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	hacks
		.updateHack(changes, id)
		.then((hack) => {
			if (hack) {
				res.json(hack);
			} else {
				res.status(404).json({ message: "Could not find hack with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Update a step
router.put("/steps/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	hacks
		.updateStep(changes, id)
		.then((step) => {
			if (step) {
				res.json(step);
			} else {
				res.status(404).json({ message: "Could not find step with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Remove a hack
router.delete("/:id", (req, res) => {
	const { id } = req.params;
	hacks
		.removeHack(id)
		.then((count) => {
			if (count) {
				res.json({ removed: count });
			} else {
				res.status(404).json({ message: "Could not find hack with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Remove a step
router.delete("/steps/:id", (req, res) => {
	const { id } = req.params;
	hacks
		.removeStep(id)
		.then((count) => {
			if (count) {
				res.json({ removed: count });
			} else {
				res.status(404).json({ message: "Could not find step with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
