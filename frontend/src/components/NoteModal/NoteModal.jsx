import toast, { Toaster } from "react-hot-toast";
import css from "./NoteModal.module.css";
import { RxCrossCircled } from "react-icons/rx";
import { editOneNote } from "../../api";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NoteModal({ setNoteOpenModal, setNotes, notes, currentNote }) {
  const [title, setTitle] = useState(currentNote.title);
  const [text, setText] = useState(currentNote.text);

  console.log(currentNote);

  const noteId = currentNote._id;

  async function handleEditNote(e) {
    e.preventDefault();

    try {
      if (title === "") {
        toast.error("Please fill in the data before saving.");
        return;
      }

      if (!noteId) {
        console.error("Current note ID is missing.");
        return;
      }

      const newNote = await editOneNote({ noteId, text, title });

      const updatedNotes = notes.map((note) => {
        if (note._id === newNote._id) {
          return newNote;
        }
        return note;
      });

      setNotes(updatedNotes);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <h2 className={css.modalTitle}>Note</h2>
        <span
          className={css.modalCloseBtn}
          onClick={() => setNoteOpenModal(false)}
        >
          <RxCrossCircled />
        </span>
        <form className={css.form} onSubmit={(e) => handleEditNote(e)}>
          <input
            className={css.titleInput}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            autoFocus="true"
            className={css.textInput}
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button className={css.saveBtn} type="submit">
            Save
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
