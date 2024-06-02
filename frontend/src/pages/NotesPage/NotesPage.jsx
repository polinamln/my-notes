import { useState } from "react";
import { FaPen } from "react-icons/fa";
import css from "./NotesPage.module.css";
import CreateNoteModal from "../../components/CreateNoteModal/CreateNoteModal";
import NotesList from "../../components/NotesList/NotesList";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  // ~ create note
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <NotesList notes={notes} setNotes={setNotes}></NotesList>
      </div>
    </div>
  );
}
