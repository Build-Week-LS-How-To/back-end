const request = require("supertest");
const server = require("./server.js");
const db = require("../data/db-config.js");

describe("tests for howTo route", () => {
	test("should be json", async () => {
		const res = await request(server).get("/api/howTo");
		expect(res.type).toBe("application/json");
	});
});

describe("tests for auth register", () => {
	beforeEach(async () => {
		await db("users").truncate();
	});

	test("returns json", () => {
		return request(server)
			.post("/api/users/register")
			.send({ username: "testUser1", password: "password" })
			.then((res) => {
				expect(res.type).toEqual("application/json");
			});
	});
	test("returns status of 201", () => {
		return request(server)
			.post("/api/users/register")
			.send({ username: "test1", password: "pass1" })
			.then((res) => {
				expect(res.status).toEqual(201);
			});
	});
});

describe("tests for auth login", () => {
	beforeEach(async () => {
		await db("users").truncate();
	});

	test("returns status of 200", () => {
		return request(server)
			.post("/api/users/register")
			.send({ username: "test1", password: "pass1" })
			.then(() => {
				return request(server)
					.post("/api/users/login")
					.send({ username: "test1", password: "pass1" })
					.then((res) => {
						expect(res.status).toEqual(200);
					});
			});
	});
	test("returns json", () => {
		return request(server)
			.post("/api/users/register")
			.send({ username: "test1", password: "pass1" })
			.then(() => {
				return request(server)
					.post("/api/users/login")
					.send({ username: "test1", password: "pass1" })
					.then((res) => {
						expect(res.type).toEqual("application/json");
					});
			});
	});
});
