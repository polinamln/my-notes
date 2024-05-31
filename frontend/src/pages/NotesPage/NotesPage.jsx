import { useEffect, useState } from "react";
import { getAllNotes, deleteOneNote } from "../../api";
import { FaPen } from "react-icons/fa";
import css from "./NotesPage.module.css";
import CreateNoteModal from "../../components/CreateNoteModal/CreateNoteModal";
import { NoteModal } from "../../components/NoteModal/NoteModal";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  // ~ create note
  const [isModalOpen, setIsModalOpen] = useState(false);

  //~ open note modal
  const [noteOpenModal, setNoteOpenModal] = useState(false);

  // ~ current note data
  const [currentNote, setCurrentNote] = useState("");

  useEffect(() => {
    async function getNotes() {
      try {
        const data = await getAllNotes();
        setNotes(data);
      } catch (e) {
        console.error(e);
      }
    }
    getNotes();
  }, []);

  async function handleClickDelete(noteId) {
    try {
      await deleteOneNote({ noteId });

      const newNotes = notes.filter((note) => note._id !== noteId);
      setNotes(newNotes);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleClick(note) {
    try {
      setCurrentNote(note);
      setNoteOpenModal(true);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <div>
        <button
          type="button"
          className={css.createBtn}
          onClick={() => setIsModalOpen(true)}
        >
          <FaPen />
          Create note
        </button>

        {isModalOpen && (
          <CreateNoteModal
            setIsModalOpen={setIsModalOpen}
            setNotes={setNotes}
            notes={notes}
          ></CreateNoteModal>
        )}

        {noteOpenModal && (
          <NoteModal
            setNotes={setNotes}
            notes={notes}
            currentNote={currentNote}
            setNoteOpenModal={setNoteOpenModal}
          ></NoteModal>
        )}
      </div>
      <div className={css.div}>
        <ul className={css.ul}>
          {[...notes].reverse().map((note) => (
            <li key={note._id} className={css.item}>
              <h3 className={css.title}>{note.title}</h3>
              <div className={css.buttons}>
                <button
                  className={css.deleteButton}
                  onClick={() => handleClick(note)}
                  type="button"
                >
                  Open
                </button>
                <button
                  className={css.deleteButton}
                  onClick={() => handleClickDelete(note._id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
