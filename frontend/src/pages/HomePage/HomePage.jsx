import HomePageText from "../../components/HomePageText/HomePageText";
import { ReactTyped } from "react-typed";
import css from "./HomePage.module.css";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const userName = user.name || "user";

  return (
    <div className={css.form}>
      <ReactTyped
        strings={[`Hello, ${userName}!`]}
        typeSpeed={40}
        className={css.text}
      />

      <HomePageText></HomePageText>
    </div>
  );
}
