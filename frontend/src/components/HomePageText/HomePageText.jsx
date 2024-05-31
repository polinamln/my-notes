import css from "./HomePageText.module.css";
import { BiHappyAlt } from "react-icons/bi";

export default function HomePageText() {
  return (
    <div className={css.div}>
      <p className={css.text}>
        Hello, I'm Polina, and I warmly welcome you to my note-taking
        application. <br></br>
        Within this platform, you have the freedom to create, store, and edit
        your notes as you wish.
      </p>
      <p className={css.textP}>
        I hope you find it both convenient and enjoyable to use!
        <BiHappyAlt />
      </p>
    </div>
  );
}
