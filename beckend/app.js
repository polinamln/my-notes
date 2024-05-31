import express from "express";
import cors from "cors";
import "dotenv/config";
import "./db/db.js";
import notesRouter from "./routes/notesRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);
app.use("/users", userRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
