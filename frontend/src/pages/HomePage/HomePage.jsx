import HomePageText from "../../components/HomePageText/HomePageText";
import { ReactTyped } from "react-typed";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.form}>
      <ReactTyped
        strings={["Hello, *username*!"]}
        typeSpeed={40}
        className={css.text}
      />

      <HomePageText></HomePageText>
    </div>
  );
}
