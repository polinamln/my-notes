import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api";
import toast, { Toaster } from "react-hot-toast";
import css from "./LoginForm.module.css";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await userLogin({ email, password });

      const { token } = response.user;
      localStorage.setItem("user", JSON.stringify(response.user));

      localStorage.setItem("token", token);
      navigate("/notes");
    } catch (e) {
      toast.error(`Login failed`);
    } finally {
      setEmail("");
      setPassword("");
      window.location.reload();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css.registerInput}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={css.registerInput}
        />
        <button type="submit" className={css.registerButton}>
          Login
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
