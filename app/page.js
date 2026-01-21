import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        marufhossain@nvim:$<span className={styles.help}> :help</span>
      </h1>
      <p>
        <a
          className={styles.subtleLink}
          href="https://www.hmaruf.com"
          target="_blank"
          rel="noreferrer"
        >
          Open main portfolio
        </a>
      </p>

      <Terminal />
    </div>
  );
}
