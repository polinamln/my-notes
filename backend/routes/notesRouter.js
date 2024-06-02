import express from "express";
import {
  createNewNote,
  getOneNote,
  getAllNotes,
  deleteOneNote,
  editOneNote,
  getOneNoteByTitle,
} from "../controllers/notesControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const notesRouter = express.Router();

notesRouter.post("/", authMiddleware, createNewNote);

notesRouter.get("/", authMiddleware, getAllNotes);
notesRouter.get("/:id", authMiddleware, getOneNote);
notesRouter.get("/title/:title", authMiddleware, getOneNoteByTitle);

notesRouter.delete("/:id", deleteOneNote);
notesRouter.patch("/:id", authMiddleware, editOneNote);

export default notesRouter;
