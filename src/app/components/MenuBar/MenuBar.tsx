import ThemeController from "../ThemeController/ThemeController";
import styles from "./menuBar.module.css";
import Link from "next/link";

export default function MenuBar() {
  return (
    <>
      <div className="flex items-center justify-end px-5 pt-5 pb-2 gap-3">
        <Link className="self-start" href="/Portfolio">
          <button className={`btn btn-ghost ${styles.colorize}`}>Portfolio</button>
        </Link>
        <Link href="/About">
          <button className={`btn btn-ghost ${styles.colorize}`}>About</button>
        </Link>
        <Link href="/Contact">
          <button className={`btn btn-ghost ${styles.colorize}`}>Contact</button>
        </Link>
        <div className="ml-5">
          <ThemeController />
        </div>
      </div>
    </>
  );
}
