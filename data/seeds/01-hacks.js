exports.seed = function (knex) {
	const hacks = [
		{
			img_url:
				"https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			title: "Getting the Life that You Want",
			description: "Three steps to live your dream life.",
			upVote: 0,
			downVote: 0,
			userID: 1,
		},
		{
			img_url:
				"https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
			title: "Problem Solving",
			description: "Three Basic Steps of Problem Solving.",
			upVote: 0,
			downVote: 0,
			userID: 2,
		},
		{
			img_url:
				"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			title: "Simple Routine for Great Skin",
			description: "Clinique signature steps for healthy glowing skin.",

			upVote: 0,
			downVote: 0,
			userID: 3,
		},
	];
	return knex("hacks")
		.insert(hacks)
		.then(() => {
			console.log("Seed data for hacks added.");
		});
};
