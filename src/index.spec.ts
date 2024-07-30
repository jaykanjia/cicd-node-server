import request from "supertest";
import { app, server } from "./index";

describe("GET /", () => {
	afterAll((done) => {
		server.close(done);
	});

	it("responds with JSON containing Hello, world!", async () => {
		await request(app)
			.get("/")
			.expect("Content-Type", /json/)
			.expect(200)
			.expect((res) => {
				if (res.body.message !== "Hello, world!") {
					throw new Error("Incorrect response message");
				}
			});
	});
});
