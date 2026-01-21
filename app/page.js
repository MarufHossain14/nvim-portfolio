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
        <div className={styles.linkRow}>
          <span className={styles.linkLabel}>links:</span>
          <a
            className={styles.subtleLink}
            href="https://www.hmaruf.com"
            target="_blank"
            rel="noreferrer"
          >
            main://hmaruf.com
          </a>
          <a
            className={styles.subtleLink}
            href="https://links.hmaruf.com/"
            target="_blank"
            rel="noreferrer"
          >
            links://hmaruf
          </a>
          <a
            className={styles.subtleLink}
            href="https://photos.hmaruf.com/"
            target="_blank"
            rel="noreferrer"
          >
            photos://portfolio
          </a>
        </div>
        <h1>
          marufhossain@nvim:$<span className={styles.commandHint}> :help</span>
        </h1>
      </div>

      <Terminal />
    </div>
  );
}
