import Note from "../models/noteSchema.js";

export const createNewNote = async (req, res, next) => {
  const data = {
    title: req.body.title,
    text: req.body.text,
    userId: req.user._id,
  };

  try {
    const newNote = await Note.create(data);

    return res.status(201).send(newNote);
  } catch (e) {
    next(e);
  }
};

export const getOneNoteByTitle = async (req, res, next) => {
  const { title } = req.params;
  try {
    const note = await Note.findOne({ title: title });
    if (!note) {
      res.status(404).json({ message: "Note not found!" });
    }

    return res.status(201).send(note);
  } catch (e) {
    next(e);
  }
};

export const getOneNote = async (req, res, next) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);

    if (!note) {
      res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).send(note);
  } catch (e) {
    next(e);
  }
};

export const getAllNotes = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const notes = await Note.find({ userId });
    res.status(200).send(notes);
  } catch (e) {
    next(e);
  }
};

export const deleteOneNote = async (req, res, next) => {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).send(note);
  } catch (e) {
    next(e);
  }
};

export const editOneNote = async (req, res, next) => {
  const { id } = req.params;
  const data = {
    title: req.body.title,
    text: req.body.text,
  };

  try {
    const note = await Note.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send(note);
  } catch (e) {
    next(e);
  }
};
