
exports.seed = function (knex) {
	const steps = [
		{ step: "Being aware change is needed.", hackID: 1 },
		{ step: "Believe that you deserve to have what you want.", hackID: 1 },
		{
			step:
				"For at least 20 minutes a day, apply a change to an area of your life that gets you closer to having what you want.",
			hackID: 1,
		},
		{ step: "Define the problem.", hackID: 2 },
		{ step: "Explain why there is a problem.", hackID: 2 },
		{
			step: "Find solutions to prevent future occurences of the problem.",
			hackID: 2,
		},
		{ step: "Use Cleansers.", hackID: 3 },
		{ step: "Exfoliate.", hackID: 3 },
		{ step: "Moisturize.", hackID: 3 },
	];
	return knex("steps")
		.insert(steps)
		.then(() => {
			console.log("Seed data for steps added");
		});
};
