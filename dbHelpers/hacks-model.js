const db = require("../data/db-config.js");

module.exports = {
	listHacks,
	listSteps,
	findHackBy,
	findHackById,
	findStepById,
	addHack,
	addStep,
	updateHack,
	updateStep,
	removeHack,
	removeStep,
	usersHack,
};

function listHacks() {
	return db("hacks").orderBy("id");
}

function findHackBy(filter) {
	return db("hacks").where(filter).orderBy("id");
}

function findHackById(id) {
	return db("hacks").where({ id }).first();
}

function findStepById(id) {
	return db("steps").where({ id }).first();
}

function listSteps() {
	return db("steps as s")
		.join("hacks", "s.hackID", "hacks.id")
		.select("hacks.title", "s.step");
}

function usersHack(id) {
	return db("hacks as h")
		.join("users as u", "h.userID", "u.id")
		.select("u.firstName", "u.lastname", "h.*")
		.where({ userID: id });
}

function addHack(hack) {
	return db("hacks")
		.insert(hack)
		.then((ids) => {
			return findHackById(ids[0]);
		});
}

function addStep(step) {
	return db("steps")
		.insert(step)
		.then((ids) => {
			return findStepById(ids[0]);
		});
}

function updateHack(changes, id) {
	return db("hacks")
		.where({ id })
		.update(changes)
		.then(() => {
			return findHackById(id);
		});
}

function updateStep(changes, id) {
	return db("steps")
		.where({ id })
		.update(changes)
		.then(() => {
			return findStepById(id);
		});
}

function removeHack(id) {
	return db("hacks").where({ id }).del();
}

function removeStep(id) {
	return db("steps").where({ id }).del();
}
