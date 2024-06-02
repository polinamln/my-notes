import { useEffect, useState } from "react";
import { getAllNotes, deleteOneNote } from "../../api";
import { NoteModal } from "../NoteModal/NoteModal";
import css from "./NotesList.module.css";

export default function NotesList({ notes, setNotes }) {
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  //~ open note modal
  const [noteOpenModal, setNoteOpenModal] = useState(false);
  // ~ current note data
  const [currentNote, setCurrentNote] = useState("");

  useEffect(() => {
    setIsLoading(true);
    async function getNotes() {
      try {
        const data = await getAllNotes();
        setNotes(data);
        setIsLoading(false);
        if (data.length === 0) {
          setNoData(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    getNotes();
  }, [setNotes]);

  async function handleClickDelete(noteId) {
    try {
      await deleteOneNote({ noteId });

      const newNotes = notes.filter((note) => note._id !== noteId);
      setNotes(newNotes);
      window.location.reload();
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
    <>
      {noteOpenModal && (
        <NoteModal
          setNotes={setNotes}
          notes={notes}
          currentNote={currentNote}
          setNoteOpenModal={setNoteOpenModal}
        ></NoteModal>
      )}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={css.div}>
          {noData ? (
            <h3>There are no notes yet...</h3>
          ) : (
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
          )}
        </div>
      )}
    </>
  );
}
