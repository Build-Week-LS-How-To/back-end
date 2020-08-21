const router = require("express").Router();
const bcrypt = require("bcryptjs");
const users = require("../dbHelpers/user-model.js");
const jwt = require("jsonwebtoken");
const secrets = require("./secrets.js");

router.post("/register", async (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 8);
	user.password = hash;

	try {
		const newUser = await users.addUser(user);
		res.status(201).json(newUser);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post("/login", (req, res) => {
	let { username, password } = req.body;

	users
		.findBy({ username })
		.then(([user]) => {
		
			if (user && bcrypt.compareSync(password, user.password)) {
				//generate token
				const token = generateToken(user);
				res.status(200).json({ message: "Welcome to How To...", token });
			} else {
				res.status(401).json({ message: 'Username and/or password incorrect' });
			}
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username,
	};

	const options = {
		expiresIn: "1d",
	};

	const secret = secrets.jwtSecret;

	return jwt.sign(payload, secret, options);
}

module.exports = router;