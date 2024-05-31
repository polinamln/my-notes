import express from "express";
import {
  createNewNote,
  getOneNote,
  getAllNotes,
  deleteOneNote,
  editOneNote,
  getOneNoteByTitle,
} from "../controllers/notesControllers.js";

const notesRouter = express.Router();

notesRouter.post("/", createNewNote);

notesRouter.get("/", getAllNotes);
notesRouter.get("/:id", getOneNote);
notesRouter.get("/title/:title", getOneNoteByTitle);

notesRouter.delete("/:id", deleteOneNote);
notesRouter.patch("/:id", editOneNote);

export default notesRouter;
