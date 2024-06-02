import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./Register.module.css";

export default function Register() {
  return (
    <div className={css.registerContainer}>
      <h2 className={css.registerTitle}>Register</h2>
      <RegisterForm></RegisterForm>
    </div>
  );
}
