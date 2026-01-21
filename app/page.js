import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.interactive}>
        <div className={styles.header}>
          <div className={styles.statusline}>
            <span className={styles.mode}>NORMAL</span>
            <span className={styles.file}>init.lua · .tmux.conf · .zshrc</span>
            <span className={styles.position}>1:1</span>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkLabel}>:open</span>
            <a
              className={styles.subtleLink}
              href="https://www.hmaruf.com"
              target="_blank"
              rel="noreferrer"
            >
              main
            </a>
            <a
              className={styles.subtleLink}
              href="https://links.hmaruf.com/"
              target="_blank"
              rel="noreferrer"
            >
              links
            </a>
            <a
              className={styles.subtleLink}
              href="https://photos.hmaruf.com/"
              target="_blank"
              rel="noreferrer"
            >
              photos
            </a>
          </div>
          <div className={styles.modeHint}>-- INSERT --</div>
          <h1 className={styles.promptLine}>
            marufhossain@vim:$<span className={styles.commandHint}> :help</span>
          </h1>
        </div>

        <Terminal />
      </div>
    </div>
  );
}
