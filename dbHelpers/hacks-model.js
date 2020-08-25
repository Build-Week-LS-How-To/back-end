const db = require("../data/db-config.js");

module.exports = {
	listHacks,
	findBy,
	findById,
	addStep,
};

function listUsers() {
	return db("hacks").orderBy("id");
}

function findHackBy(filter) {
	return db("hacks").where(filter).orderBy("id");
}

function findHackById(id) {
	return db("hacks").where({ id }).first();
}

// async function addStep(step) {
// 	try {
// 		const [id] = await db("step").insert(step, "id");
// 		return findById(id);
// 	} catch (err) {
// 		throw err;
// 	}
// }