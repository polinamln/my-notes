import { useState } from "react";
import css from "./RegisterForm.module.css";
import { userRegister } from "../../api";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await userRegister({ name, email, password });
      if (response.user) {
        toast.success("Registration successful! You can now log in.");
      }
    } catch (e) {
      toast.error(`Error registering user`);
    } finally {
      setName("");
      setEmail("");
      setPassword("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={css.registerInput}
        />
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
          Register
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
