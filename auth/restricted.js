const jwt = require("jsonwebtoken");
const secrets = require("./secrets.js");

module.exports = (req, res, next) => {
	const token = req.headers.authorization;
	console.log("token", token);

	if (token) {
		jwt.verify(token, secrets.jwtSecret, (err, userToken) => {
			if (err) {
				res.status(401).json({ message: "invalid token" });
			} else {
				req.decodedJWT = userToken;
				next();
			}
		});
	} else {
		res.status(401).json({ message: "There was an err logging you in.." });
	}
};