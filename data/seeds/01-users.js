const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
	const users = [
		{
			username: "testUser1",
			password: bcrypt.hashSync("password", 8),
			firstName: "Fred",
			lastName: "Flintstone",
			email: "email@email.com",
		},
		{
			username: "testUser2",
			password: bcrypt.hashSync("password", 8),
			firstName: "Barny",
			lastName: "Rubble",
			email: "email@email.com",
		},
		{
			username: "testUser3",
			password: bcrypt.hashSync("password", 8),
			firstName: "Wilma",
			lastName: "Flintstone",
			email: "email@email.com",
		},
	];

	return knex("users")
		.insert(users)
		.then(() => {
			console.log("Seed data for users added");
		});
};
