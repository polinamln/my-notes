import css from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className={css.registerContainer}>
      <h2 className={css.registerTitle}>Login</h2>
      <LoginForm></LoginForm>
    </div>
  );
}
