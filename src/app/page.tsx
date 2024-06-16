"use client";

import styles from "./root.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import InfinitySpinner from "./components/Spinners/InfinitySpinner";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/Portfolio");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
        <div className="flex flex-col">
          <p className="self-center mt-20">Loading...Please Stand By...</p>
          <div className={`${styles.spinner} self-center`}>
            <InfinitySpinner />
          </div>
      </div>
    </>
  );
}
