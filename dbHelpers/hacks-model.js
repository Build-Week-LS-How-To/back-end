const db = require("../data/db-config.js");

module.exports = {
	listHacks,
	listSteps,
	findHackBy,
	findHackById,
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

function listSteps() {
	return db("steps").orderBy("id");
}
