import axios from "axios";

// const API_URL = "http://localhost:4000";
const API_URL = "my-notes-app-r4ys.onrender.com";

axios.defaults.baseURL = API_URL;

export const getAllNotes = async () => {
  try {
    const res = await axios.get("/notes");
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteOneNote = async ({ noteId }) => {
  try {
    const res = await axios.delete(`/notes/${noteId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const createNewNote = async ({ text, title }) => {
  try {
    const res = await axios.post("/notes", { text, title });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getOneNote = async ({ noteId }) => {
  try {
    const res = await axios.get(`/notes/${noteId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

// export const getOneNoteByTitle = async () => {
//   try {
//   } catch (e) {
//     console.error(e);
//   }
// };

export const editOneNote = async ({ noteId, text, title }) => {
  try {
    const res = await axios.patch(`/notes/${noteId}`, { text, title });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
