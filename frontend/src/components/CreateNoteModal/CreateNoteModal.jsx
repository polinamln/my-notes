/* eslint-disable react/prop-types */
import { RxCrossCircled } from "react-icons/rx";
import css from "./CreateNoteModal.module.css";
import { useState } from "react";
import { createNewNote } from "../../api";
import toast, { Toaster } from "react-hot-toast";

export default function CreateNoteModal({ setIsModalOpen, setNotes, notes }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  async function handleCreateNote(e) {
    e.preventDefault();
    try {
      if (title === "") {
        toast.error("Please fill in the data before saving.");
        return;
      }

      const newNote = await createNewNote({ text, title });

      setNotes([newNote, ...notes]);

      setIsModalOpen(false);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <h2 className={css.modalTitle}>Create new note :</h2>
        <span
          className={css.modalCloseBtn}
          onClick={() => setIsModalOpen(false)}
        >
          <RxCrossCircled />
        </span>
        <form className={css.form} onSubmit={(e) => handleCreateNote(e)}>
          <input
            className={css.titleInput}
            autoFocus={true}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
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
