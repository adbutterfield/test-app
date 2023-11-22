"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [clickedStatus, setClickedStatus] = useState("not clicked");

  return (
    <main className={styles.main}>
      <a href="#">
        <div>
          <div>
            <div data-testid="status">{clickedStatus}</div>
          </div>
        </div>
      </a>
      <a href="#" onClick={() => setClickedStatus("clicked")}>
        link
      </a>
      <form>
        <button
          data-testid="submit"
          type="submit"
          onSubmit={() => setClickedStatus("clicked")}
        >
          submit
        </button>
      </form>
      <form>
        <button
          data-testid="click"
          type="submit"
          onClick={() => setClickedStatus("clicked")}
        >
          click
        </button>
      </form>
    </main>
  );
}
