"use client";

import styles from "./root.module.css";
import InfinitySpinner from "./components/Spinners/InfinitySpinner";

export default function Home() {

  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center flex-grow">
        <h1>Welcome to my webpage!</h1>
        <p>I am a student developer, and this site is currently under construction.</p>

      </div>
    </>
  );
}
