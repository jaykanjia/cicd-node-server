import { config } from "dotenv";
import express, { Request, Response } from "express";
config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Hello, world!" });
});

const server = app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

export { app, server };
