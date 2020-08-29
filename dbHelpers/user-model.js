const db = require("../data/db-config.js");

module.exports = {
	listUsers,
	findBy,
	findById,
	addUser,
	updateUser,
};

function listUsers() {
	return db("users").orderBy("id");
}

function findBy(filter) {
	return db("users").where(filter).orderBy("id");
}

function findById(id) {
	return db("users").where({ id }).first();
}

async function addUser(user) {
	try {
		const [id] = await db("users").insert(user, "id");
		return findById(id);
	} catch (err) {
		throw err;
	}
}

function updateUser(changes, id) {
	return db("users")
		.where({ id })
		.update(changes)
		.then(() => {
			return findById(id);
		});
}
