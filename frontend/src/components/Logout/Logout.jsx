import { userLogout } from "../../api";
import css from "./Logout.module.css";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  async function handleSubmit() {
    await userLogout({ userId });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <button type="submit" className={css.link} onClick={handleSubmit}>
        Logout
      </button>
    </div>
  );
}
