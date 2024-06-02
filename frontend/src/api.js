import axios from "axios";

const API_URL = "http://localhost:4000";
// const API_URL = "https://my-notes-app-r4ys.onrender.com";

const token = localStorage.getItem("token");

axios.defaults.baseURL = API_URL;

export const getAllNotes = async () => {
  try {
    const res = await axios.get("/notes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteOneNote = async ({ noteId }) => {
  try {
    const res = await axios.delete(`/notes/${noteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const createNewNote = async ({ text, title }) => {
  try {
    const res = await axios.post(
      "/notes",
      { text, title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getOneNote = async ({ noteId }) => {
  try {
    const res = await axios.get(`/notes/${noteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const res = await axios.patch(
      `/notes/${noteId}`,
      { text, title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

//~ user

export const userRegister = async ({ name, email, password }) => {
  try {
    const res = await axios.post("users/register", { name, email, password });

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const userLogin = async ({ email, password }) => {
  try {
    const res = await axios.post("users/login", { email, password });

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const userLogout = async ({ userId }) => {
  try {
    const res = await axios.post(
      "users/logout",
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (e) {
    console.error(e);
  }
};
