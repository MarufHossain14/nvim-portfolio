import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.statusline}>
          <span className={styles.mode}>NORMAL</span>
          <span className={styles.file}>init.lua · .tmux.conf · .zshrc</span>
          <span className={styles.position}>1:1</span>
        </div>
        <h1>
          marufhossain@nvim:$<span className={styles.commandHint}> :help</span>
        </h1>
        <a
          className={styles.subtleLink}
          href="https://www.hmaruf.com"
          target="_blank"
          rel="noreferrer"
        >
          Open main portfolio
        </a>
      </div>

      <Terminal />
    </div>
  );
}
