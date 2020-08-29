exports.up = function (knex) {
	return knex.schema
		.createTable("users", (tbl) => {
			tbl.increments();
			
			tbl.string("username", 128).notNullable().unique().index();
			tbl.string("password", 128).notNullable();
			tbl.string("firstName", 128);
			tbl.string("lastName", 128);
			tbl.string("email", 256);
		})
		.createTable("hacks", (tbl) => {
			tbl.increments();

			tbl.binary("img_url", 256);
			tbl.string("title", 128).notNullable();
			tbl.string("description", 256).notNullable();
			tbl.string('stepOneTitle');
			tbl.string('stepOneDescription');
			tbl.string('stepTwoTitle');
			tbl.string('stepTwoDescription');
			tbl.string('stepThreeTitle');
			tbl.string('stepThreeDescription');
			tbl.float("upVote");
			tbl.float("downVote");
			tbl
				.integer("userID")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		})
		.createTable("steps", (tbl) => {
			tbl.increments();

			tbl.string("step", 256).notNullable().index();
			tbl
				.integer("hackID")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("hacks")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("steps")
		.dropTableIfExists("hacks")
		.dropTableIfExists("users");
};
